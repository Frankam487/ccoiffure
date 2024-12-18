const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Créer une instance d'Express
const app = express();

// Middleware pour parser les corps des requêtes
app.use(bodyParser.json());
app.use(cors());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/beautyexpress', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à la base de données MongoDB'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Définir le modèle de réservation
const Reservation = mongoose.model('Reservation', new mongoose.Schema({
  name: String,
  phone: String,
  service: String,
  date: Date,
  time: String,
  additionalServices: [String],  // Liste des services supplémentaires
}));

// Configuration de Nodemailer (exemple avec Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Tu peux aussi utiliser d'autres services comme SendGrid, Mailgun, etc.
  auth: {
    user: 'ton-email@gmail.com',  // Remplace par ton adresse Gmail
    pass: 'ton-mot-de-passe'      // Remplace par ton mot de passe ou un mot de passe d'application
  }
});

// Route POST pour créer une réservation
app.post('/reserver', async (req, res) => {
  const { name, phone, service, date, time, additionalServices } = req.body;

  try {
    // Créer une nouvelle réservation dans MongoDB
    const newReservation = new Reservation({
      name,
      phone,
      service,
      date,
      time,
      additionalServices,
    });

    await newReservation.save();

    // Configuration du message à envoyer par e-mail
    const mailOptions = {
      from: 'ton-email@gmail.com',  // L'adresse e-mail d'expédition
      to: 'ton-email@gmail.com',    // L'adresse e-mail de réception (ex: la tienne)
      subject: 'Nouvelle réservation',
      text: `
        Nouvelle réservation reçue :

        Nom : ${name}
        Téléphone : ${phone}
        Service : ${service}
        Date : ${date}
        Heure : ${time}
        Services supplémentaires : ${additionalServices.join(', ')}
      `,
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error });
      }
      console.log('Email envoyé:', info.response);
    });

    // Répondre au client que la réservation est réussie
    res.status(201).json({ message: 'Réservation réussie et e-mail envoyé' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la réservation', error });
  }
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
