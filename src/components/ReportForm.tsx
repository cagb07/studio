// src/components/ReportForm.tsx
"use client";

import React, { useEffect } from 'react'; // Import useEffect
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reportSchema, ReportData } from '@/lib/types';
import { saveReport, loadReport } from '@/lib/reportService'; // Import service functions

export default function ReportForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReportData>({ // Add reset
    resolver: zodResolver(reportSchema),
    // Default values can be loaded here as well, ensuring they are set after mount
  });

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const loadedData = loadReport();
    if (loadedData) {
      reset(loadedData); // Populate form with loaded data
    }
  }, [reset]);

  const onSubmit: SubmitHandler<ReportData> = (data) => {
    console.log(data);
    saveReport(data); // Save data to localStorage
    alert('Informe guardado localmente!'); // Optional: notify user
  };

  return (
    // ... (rest of the form JSX remains the same)
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ... form fields ... */}
      <div>
        <label htmlFor="schoolName">Nombre del Centro Educativo:</label>
        <input id="schoolName" {...register("schoolName")} />
        {errors.schoolName && <p>{errors.schoolName.message}</p>}
      </div>

      <div>
        <label htmlFor="visitDate">Fecha de Visita:</label>
        <input id="visitDate" type="date" {...register("visitDate")} />
        {errors.visitDate && <p>{errors.visitDate.message}</p>}
      </div>

      <div>
        <label htmlFor="contactName">Nombre del Contacto:</label>
        <input id="contactName" {...register("contactName")} />
        {errors.contactName && <p>{errors.contactName.message}</p>}
      </div>
      
      <div>
        <label htmlFor="virtualLineNumber">Línea virtual #:</label>
        <input id="virtualLineNumber" {...register("virtualLineNumber")} />
        {errors.virtualLineNumber && <p>{errors.virtualLineNumber.message}</p>}
      </div>

      <div>
        <label htmlFor="inventorySummary">Resumen de Inventario:</label>
        <textarea id="inventorySummary" {...register("inventorySummary")} />
      </div>

      <div>
        <label htmlFor="observations">Observaciones:</label>
        <textarea id="observations" {...register("observations")} />
      </div>

      <button type="submit">Guardar Informe</button>
    </form>
  );
}
