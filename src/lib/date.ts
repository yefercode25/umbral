export const todayKey = () => new Date().toISOString().slice(0, 10)

export const formatShortDate = (iso: string) =>
  new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso))
