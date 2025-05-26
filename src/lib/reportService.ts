// src/lib/reportService.ts
import { ReportData } from './types';

const LOCAL_STORAGE_KEY = 'reportFormData';

export const saveReport = (data: ReportData): void => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, jsonData);
  } catch (error) {
    console.error("Error saving report to localStorage:", error);
    // Optionally, notify the user or handle more gracefully
  }
};

export const loadReport = (): ReportData | null => {
  try {
    const jsonData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (jsonData) {
      return JSON.parse(jsonData) as ReportData;
    }
    return null;
  } catch (error) {
    console.error("Error loading report from localStorage:", error);
    return null;
  }
};
