// src/lib/reportService.ts
import { ReportData, reportSchema } from './types'; // Import reportSchema

const LOCAL_STORAGE_KEY = 'reportFormData';

export const saveReport = (data: ReportData): void => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, jsonData);
  } catch (error) {
    console.error("Error saving report to localStorage. Data may not be persisted. Error:", error);
    // Optionally, notify the user or handle more gracefully
  }
};

export const loadReport = (): ReportData | null => {
  try {
    const jsonData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (jsonData) {
      const parsedData = JSON.parse(jsonData); // This could throw an error if jsonData is not valid JSON
      const result = reportSchema.safeParse(parsedData);

      if (result.success) {
        return result.data;
      } else {
        console.error("Error validating report data from localStorage:", result.error.flatten());
        localStorage.removeItem(LOCAL_STORAGE_KEY); // Remove invalid data
        return null;
      }
    }
    return null;
  } catch (error) { // This catch block handles errors from localStorage.getItem or JSON.parse
    console.error("Error reading report from localStorage. Cannot load data. Error:", error);
    // If JSON.parse itself fails or localStorage.getItem fails, also consider removing the item
    // It's good practice to remove potentially corrupted data.
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return null;
  }
};
