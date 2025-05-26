// src/app/page.tsx
import ReportForm from '@/components/ReportForm'; // Import the form component

export default function HomePage() {
  return (
    <div>
      <h1>Informe de Visita en Sitio</h1>
      <ReportForm /> {/* Render the form component */}
    </div>
  );
}
