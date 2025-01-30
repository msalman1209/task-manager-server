const User = require("../models/User");

const uploadToPinata = async(req, res) => {
    const { id } = req.params;
    const { profileImage } = req.body; // Get the IPFS URL from frontend
  
    try {
        const user = await User.findByPk(id);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.profileImage = profileImage;
      await user.save();
      
  
      res.json({ message: 'Profile image updated', profileImage });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };

module.exports = { uploadToPinata };