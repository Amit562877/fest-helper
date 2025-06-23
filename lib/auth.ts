// Fake auth utilities (no real backend)
export const login = async (email: string, password: string) => {
  return email === "vendor@example.com" && password === "password123";
};

export const signup = async (data: { email: string; password: string; name: string }) => {
  return { success: true, vendorId: "vendor-123" };
};

export const resetPassword = async (email: string) => {
  return { success: true };
};

export const getProfile = async (vendorId: string) => {
  return {
    name: "Studio Elite",
    email: "vendor@example.com",
    services: ["Photography", "Video Editing"]
  };
};