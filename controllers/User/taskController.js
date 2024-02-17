const Contact = require("../../models/Contact.model");
const Career = require("../../models/Career.model");

module.exports = {
  createContact: async (req, res) => {
    try {
      const contact = await Contact.create(req.body);
      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  getAllContacts: async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json({ success: true, data: contacts });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getContactById: async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) {
        return res
          .status(404)
          .json({ success: false, error: "Contact not found" });
      }
      res.status(200).json({ success: true, data: contact });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  updateContact: async (req, res) => {
    try {
      const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!contact) {
        return res
          .status(404)
          .json({ success: false, error: "Contact not found" });
      }
      res.status(200).json({ success: true, data: contact });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
  createCareer: async (req, res) => {
    try {
      const career = await Career.create(req.body);
      res.status(201).json({ success: true, data: career });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  getAllCareers: async (req, res) => {
    try {
      const careers = await Career.find();
      res.status(200).json({ success: true, data: careers });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  getCareerById: async (req, res) => {
    try {
      const career = await Career.findById(req.params.id);
      if (!career) {
        return res
          .status(404)
          .json({ success: false, error: "Career not found" });
      }
      res.status(200).json({ success: true, data: career });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  updateCareer: async (req, res) => {
    try {
      const career = await Career.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!career) {
        return res
          .status(404)
          .json({ success: false, error: "Career not found" });
      }
      res.status(200).json({ success: true, data: career });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};
