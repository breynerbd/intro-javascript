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
| **POST** | `/transactions` | Realizar transferencia entre cuentas | Admin |
| **GET** | `/transactions` | Listar historial de transacciones | Admin |
| **GET** | `/transactions/:id` | Transacciones de una cuenta específica | Admin |

---

## 📊 Movimientos (Movements)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/movements` | Crear registro de movimiento manual | Admin |
| **GET** | `/movements` | Listar todos los movimientos | Admin |
| **GET** | `/movements/:account_id` | Movimientos de una cuenta específica | Admin |

---

## 💳 Tarjetas (Cards)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/cards` | Listar todas las tarjetas | Admin |
| **GET** | `/cards/:id` | Ver tarjetas de una cuenta (:id cuenta) | Admin |
| **POST** | `/cards/:id` | Aprobar/Rechazar tarjeta (:id tarjeta) | Admin |
| **POST** | `/cards/:id/activate` | Activar tarjeta aprobada | Admin |
| **POST** | `/cards/:id/block` | Bloquear tarjeta | Admin |

---

## 📝 Préstamos (Loans)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/loans` | Listar todos los préstamos | Admin |
| **GET** | `/loans/:id` | Detalle de préstamo y sus cuotas | Admin |
| **PUT** | `/loans/approve/:id` | Aprobar préstamo y desembolsar | Admin |
| **PUT** | `/loans/reject/:id` | Rechazar solicitud de préstamo | Admin |
| **PUT** | `/loans/pay/:installment_id` | Pagar cuota de préstamo | Admin |
| **POST** | `/loans/check-mora` | Proceso manual de revisión de mora | Admin |

---

## 🔄 Reversos (Reversals)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/reversals` | Crear un registro de reverso | Admin |
| **GET** | `/reversals` | Listar bitácora de reversos | Admin |

---

# 📱 KinRural Customer API (Auth: User)
**Base URL:** `http://localhost:3006/kinrural/v1/user`

---

## 👤 Perfil de Usuario
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | Obtener el perfil del usuario autenticado | User |
| **PUT** | `/` | Actualizar información del perfil | User |

---

## 💰 Mis Cuentas
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/accounts` | Listar todas mis cuentas bancarias | User |

---

## 📩 Solicitudes de Cuenta (Account Requests)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/account-requests` | Solicitar apertura de una nueva cuenta | User |
| **GET** | `/account-requests` | Ver el estado de mis solicitudes | User |

---

## 👥 Beneficiarios
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/beneficiaries` | Registrar un nuevo beneficiario | User |
| **GET** | `/beneficiaries` | Listar mis beneficiarios registrados | User |
| **PUT** | `/beneficiaries/:id` | Actualizar datos de un beneficiario | User |
| **DELETE** | `/beneficiaries/:id` | Eliminar un beneficiario | User |

---

## 💳 Mis Tarjetas
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/cards` | Solicitar una nueva tarjeta | User |
| **GET** | `/cards` | Listar mis tarjetas actuales | User |

---

## 📝 Préstamos (Loans)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/loans/quote` | Cotizar un préstamo (simulación) | User |
| **POST** | `/loans/request` | Solicitar un préstamo formalmente | User |
| **GET** | `/loans/user/:user_id` | Ver historial de mis préstamos | User |

---

## 💸 Transacciones y Movimientos
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/transactions` | Crear una nueva transferencia/pago | User |
| **GET** | `/movements` | Ver mi historial de movimientos | User |

---

## 📄 Estados de Cuenta
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/statements` | Consultar mis estados de cuenta mensuales | User |

## ⚙️ Procesos Lógicos del Sistema

El sistema implementa las siguientes reglas de negocio automatizadas:

1. **Intereses Mensuales:** Se aplica una tasa del **5% anual** sobre el saldo de las cuentas de ahorro.
2. **Gestión de Mora:** Si una cuota de préstamo supera los **30 días de atraso**, el sistema la marca "EN_MORA" y aplica un recargo del **3%**.
3. **Límites de Cuenta:** Un usuario solo puede poseer máximo **2 cuentas de ahorro** y **1 cuenta monetaria**.
4. **Validación de Transferencias:** Existe un límite máximo acumulado de **Q10,000.00** en transferencias por día.
