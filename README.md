# 🏦 KinRural API Documentation

Documentación de los endpoints para el sistema bancario KinRural.

**Base URL:** `http://localhost:3005/kinrural/v1`

---

# 🏦 KinRural API Documentation
**Base URL:** `http://localhost:3005/kinrural/v1`

---

## 🔐 Roles
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/roles` | Crear un nuevo rol | Admin |
| **GET** | `/roles` | Listar todos los roles | Admin |
| **DELETE** | `/roles/:id` | Eliminar un rol | Admin |

---

## 👥 Usuarios
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/users` | Registrar un nuevo usuario | Admin |
| **GET** | `/users` | Listar todos los usuarios | Admin |
| **GET** | `/users/:id` | Obtener usuario por ID | Admin |
| **PUT** | `/users/:id` | Actualizar datos de usuario | Admin |
| **DELETE** | `/users/:id` | Eliminar un usuario | Admin |

---

## 💰 Cuentas (Accounts)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/accounts` | Crear cuenta manualmente | Admin |
| **GET** | `/accounts` | Listar todas las cuentas | Admin |
| **GET** | `/accounts/:id` | Obtener cuenta por ID | Admin |
| **DELETE** | `/accounts/:id` | Eliminar una cuenta | Admin |

---

## 📩 Solicitudes de Cuenta (Account Requests)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/account-requests` | Listar solicitudes de apertura | Admin |
| **PATCH** | `/account-requests/:id/approve` | Aprobar solicitud de cuenta | Admin |
| **PATCH** | `/account-requests/:id/reject` | Rechazar solicitud de cuenta | Admin |

---

## 💸 Transacciones
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/transactions` | Realizar transferencia entre cuentas | User |
| **GET** | `/transactions` | Listar historial de transacciones | Admin |
| **GET** | `/transactions/:id` | Transacciones de una cuenta específica | User |

---

## 📊 Movimientos (Movements)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/movements` | Crear registro de movimiento manual | Admin |
| **GET** | `/movements` | Listar todos los movimientos | Admin |
| **GET** | `/movements/:account_id` | Movimientos de una cuenta específica | User |

---

## 💳 Tarjetas (Cards)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/cards` | Listar todas las tarjetas | Admin |
| **GET** | `/cards/:id` | Ver tarjetas de una cuenta (:id cuenta) | User |
| **POST** | `/cards/:id` | Aprobar/Rechazar tarjeta (:id tarjeta) | Admin |
| **POST** | `/cards/:id/activate` | Activar tarjeta aprobada | User |
| **POST** | `/cards/:id/block` | Bloquear tarjeta | User |

---

## 📝 Préstamos (Loans)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/loans` | Listar todos los préstamos | Admin |
| **GET** | `/loans/:id` | Detalle de préstamo y sus cuotas | Admin |
| **PUT** | `/loans/approve/:id` | Aprobar préstamo y desembolsar | Admin |
| **PUT** | `/loans/reject/:id` | Rechazar solicitud de préstamo | Admin |
| **PUT** | `/loans/pay/:installment_id` | Pagar cuota de préstamo | User |
| **POST** | `/loans/check-mora` | Proceso manual de revisión de mora | Admin |

---

## 🔄 Reversos (Reversals)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/reversals` | Crear un registro de reverso | Admin |
| **GET** | `/reversals` | Listar bitácora de reversos | Admin |

---

## ⚙️ Procesos Lógicos del Sistema

El sistema implementa las siguientes reglas de negocio automatizadas:

1. **Intereses Mensuales:** Se aplica una tasa del **5% anual** sobre el saldo de las cuentas de ahorro.
2. **Gestión de Mora:** Si una cuota de préstamo supera los **30 días de atraso**, el sistema la marca "EN_MORA" y aplica un recargo del **3%**.
3. **Límites de Cuenta:** Un usuario solo puede poseer máximo **2 cuentas de ahorro** y **1 cuenta monetaria**.
4. **Validación de Transferencias:** Existe un límite máximo acumulado de **Q10,000.00** en transferencias por día.
