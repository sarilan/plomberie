import { COMPANY } from "@/config/constants"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-light">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-primary">
          {COMPANY.name}
        </h1>
        <p className="text-lg text-gray-medium">
          Spécialiste dégorgement et curage canalisation en Île-de-France
        </p>
        <p className="text-sm text-gray-medium">
          Disponible {COMPANY.availability} — Intervention sous {COMPANY.responseTime}
        </p>
      </div>
    </main>
  )
}
