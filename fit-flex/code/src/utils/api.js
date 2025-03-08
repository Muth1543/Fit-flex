import axios from "axios";

const API_KEY = "8af205ae45mshbcaac1502baa827p14546cjsn6b33ae93a588";
const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
});

export const fetchBodyParts = async () => {
  try {
    const response = await apiClient.get("/bodyPartList");
    return response.data;
  } catch (error) {
    console.error("Error fetching body parts:", error);
    return [];
  }
};

export const fetchEquipmentList = async () => {
  try {
    const response = await apiClient.get("/equipmentList");
    return response.data;
  } catch (error) {
    console.error("Error fetching equipment list:", error);
    return [];
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  try {
    const response = await apiClient.get(`/bodyPart/${bodyPart}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching exercises for ${bodyPart}:`, error);
    return [];
  }
};

export const fetchExerciseDetails = async (id) => {
  try {
    const response = await apiClient.get(`/exercise/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching exercise details:", error);
    return null;
  }
};
