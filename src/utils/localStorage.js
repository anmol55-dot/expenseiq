export function getStoredData(key, fallbackValue) {
  const savedData = localStorage.getItem(key)
  return savedData ? JSON.parse(savedData) : fallbackValue
}

export function saveStoredData(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
