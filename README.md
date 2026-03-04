# 🏦 KinRural API Documentation

Documentación de los endpoints para el sistema bancario KinRural.

**Base URL:** `http://localhost:3005/kinrural/v1`

---

## 👥 Gestión de Usuarios (`/users`)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/users` | Registrar un nuevo usuario (Valida ingresos > Q100) | Admin |
| **GET** | `/users` | Obtener lista de todos los usuarios | Admin |
| **GET** | `/users/:id` | Obtener un usuario por su ID | Admin |
| **PUT** | `/users/:id` | Actualizar información de un usuario | Admin |
| **DELETE** | `/users/:id` | Eliminar un usuario del sistema | Admin |

## 🏦 Cuentas Bancarias (`/accounts`)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/accounts` | Crear una cuenta manual (Genera `nanoid`) | Admin |
| **GET** | `/accounts` | Listar todas las cuentas registradas | Admin |
| **GET** | `/accounts/:id` | Obtener detalles de una cuenta por ID | Admin |
| **DELETE** | `/accounts/:id` | Eliminar cuenta permanentemente | Admin |

## 📩 Solicitudes de Apertura (`/account-requests`)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/account-requests` | Listar todas las solicitudes de cuentas | Admin |
| **PATCH** | `/account-requests/:id/approve` | Aprobar solicitud (Valida límites: 2 Ahorro / 1 Mon.) | Admin |
| **PATCH** | `/account-requests/:id/reject` | Rechazar solicitud de apertura | Admin |

## 💰 Préstamos y Cuotas (`/loans`)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/loans` | Listar todos los préstamos con info de usuario | Admin |
| **GET** | `/loans/:id` | Ver detalle de préstamo y tabla de cuotas | Admin |
| **PUT** | `/loans/approve/:id` | Aprobar préstamo y generar plan de pagos | Admin |
| **PUT** | `/loans/reject/:id` | Rechazar solicitud de préstamo | Admin |
| **PUT** | `/loans/pay/:installment_id` | Pagar una cuota (Valida saldo y mora) | User/Admin |
| **POST** | `/loans/check-mora` | Ejecutar script de revisión de mora diaria | System |

## 💳 Tarjetas (`/cards`)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/cards` | Listar todas las tarjetas del sistema | Admin |
| **GET** | `/cards/:id` | Ver tarjetas de una cuenta específica | User/Admin |
| **POST** | `/cards/:id` | Decidir sobre solicitud (Aprobar/Rechazar) | Admin |
| **POST** | `/cards/:id/activate` | Activar tarjeta (Solo si está aprobada) | User |
| **POST** | `/cards/:id/block` | Bloquear tarjeta por seguridad | User/Admin |

## 💸 Transacciones y Movimientos
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/transactions` | Realizar transferencia (Límite Q10,000 diarios) | User |
| **GET** | `/transactions` | Listar historial global de transacciones | Admin |
| **GET** | `/transactions/:id` | Transacciones por ID de cuenta | User |
| **POST** | `/movements` | Crear registro de movimiento manual | Admin |
| **GET** | `/movements` | Listar todos los movimientos contables | Admin |
| **GET** | `/movements/:account_id` | Movimientos detallados de una cuenta | User |

## 🔐 Roles y Configuración
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/roles` | Crear un nuevo rol de sistema | Admin |
| **GET** | `/roles` | Listar roles disponibles | Admin |
| **DELETE** | `/roles/:id` | Eliminar un rol por ID | Admin |
| **POST** | `/reversals` | Registrar un reverso de transacción | Admin |
| **GET** | `/reversals` | Consultar bitácora de reversos | Admin |

---

## ⚙️ Procesos Lógicos del Sistema

El sistema implementa las siguientes reglas de negocio automatizadas:

1. **Intereses Mensuales:** Se aplica una tasa del **5% anual** sobre el saldo de las cuentas de ahorro.
2. **Gestión de Mora:** Si una cuota de préstamo supera los **30 días de atraso**, el sistema la marca "EN_MORA" y aplica un recargo del **3%**.
3. **Límites de Cuenta:** Un usuario solo puede poseer máximo **2 cuentas de ahorro** y **1 cuenta monetaria**.
4. **Validación de Transferencias:** Existe un límite máximo acumulado de **Q10,000.00** en transferencias por día.
