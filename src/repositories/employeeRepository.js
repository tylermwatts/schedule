export async function getAllEmployees() {
  const response = await fetch('/api/employees', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
}
export async function addEmployee(employee) {
  try {
    const response = await fetch('/api/employee', {
      method: 'POST',
      body: JSON.stringify({
        name: employee.name,
        schedule: employee.schedule,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
}
export async function editEmployee(employee) {
  const response = await fetch('/api/employee/' + employee._id, {
    method: 'PUT',
    body: JSON.stringify({
      name: employee.name,
      schedule: employee.schedule,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
}
export async function deleteEmployee(id) {
  const response = await fetch('/api/employee/' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
}
