import { Input, Button, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/ui'

export const FormScheduleAppointment = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl text-primary text-center font-bold mb-6">Pide cita gratis</h2>
      <form className="space-y-6">
        <div>
          <Input
            placeholder="Nombre *"
            required
            className="border-gray-300"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Correo electrónico *"
            required
            className="border-gray-300"
          />
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Teléfono *"
            required
            className="border-gray-300"
          />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="Selecciona una clínica en España" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="madrid">Madrid</SelectItem>
              <SelectItem value="barcelona">Barcelona</SelectItem>
              <SelectItem value="valencia">Valencia</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 mr-2"
              required
            />
            <span>Acepto la política de privacidad y de protección de datos</span>
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 mr-2"
            />
            <span>Quiero suscribirme a la newsletter</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">Seleccionar fecha</Button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">Solicitar cita</Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">Te contactaremos para acordar la fecha de tu visita</p>
          <p className="text-center text-sm text-muted-foreground">
            Puedes pedir cita y te llamamos para acordar la fecha de tu visita o puedes seleccionar tu misma la fecha y hora que prefieras.
          </p>
        </div>
      </form>
    </div>
  )
}
