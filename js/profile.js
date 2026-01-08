export const UserProfile = {
  wallet: null,
  farcaster: null,
  email: null,

  setWallet(address) {
    this.wallet = address;
    this.save();
  },

  setFarcaster(fid, username) {
    this.farcaster = { fid, username };
    this.save();
  },

  setEmail(email) {
    this.email = email;
    this.save();
  },

  save() {
    localStorage.setItem("acm_profile", JSON.stringify(this));
  },

  load() {
    const data = localStorage.getItem("acm_profile");
    if (data) Object.assign(this, JSON.parse(data));
  }
};
