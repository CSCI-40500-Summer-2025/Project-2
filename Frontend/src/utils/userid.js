// utils/userId.js
export const getOrCreateUserId = () => {
  const localKey = "foundit_user_id";
  let userId = localStorage.getItem(localKey);
  if (!userId) {
    userId = crypto.randomUUID(); // generates UUID
    localStorage.setItem(localKey, userId);
  }
  return userId;
};
