# 🏦 KinRural API Documentation

Este proyecto se divide en dos microservicios o paneles de control: **Administrativo (Port 3005)** y **Cliente (Port 3006)**.

---

## 🛠️ Panel Administrativo (Admin API)
**Base URL:** `http://localhost:3005/kinrural/v1`

### 👥 Usuarios
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/users` | Registrar un nuevo usuario (Valida ingresos > Q100) | Admin |
| **GET** | `/users` | Listar todos los usuarios del sistema | Admin |
| **GET** | `/users/:id` | Obtener detalles de un usuario por ID | Admin |
| **PUT** | `/users/:id` | Actualizar información de usuario | Admin |
| **DELETE** | `/users/:id` | Eliminar un usuario del sistema | Admin |

### 🔐 Roles
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/roles` | Crear un nuevo rol de sistema | Admin |
| **GET** | `/roles` | Listar todos los roles disponibles | Admin |
| **DELETE** | `/roles/:id` | Eliminar un rol existente | Admin |

### 💰 Cuentas (Accounts)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/accounts` | Crear una cuenta manualmente | Admin |
| **GET** | `/accounts` | Listar todas las cuentas bancarias | Admin |
| **GET** | `/accounts/:id` | Obtener detalles de una cuenta por ID | Admin |
| **DELETE** | `/accounts/:id` | Eliminar una cuenta permanentemente | Admin |

### 📩 Solicitudes de Cuenta (Account Requests)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/account-requests` | Listar todas las solicitudes de apertura | Admin |
| **PATCH** | `/account-requests/:id/approve` | Aprobar solicitud (Valida límites de cuenta) | Admin |
| **PATCH** | `/account-requests/:id/reject` | Rechazar solicitud de apertura | Admin |

### 📝 Préstamos (Loans)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/loans` | Listar todos los préstamos globales | Admin |
| **GET** | `/loans/:id` | Ver detalle de préstamo y tabla de amortización | Admin |
| **PUT** | `/loans/approve/:id` | Aprobar préstamo y desembolsar fondos | Admin |
| **PUT** | `/loans/reject/:id` | Rechazar solicitud de préstamo | Admin |
| **PUT** | `/loans/pay/:installment_id` | Registrar pago de una cuota | Admin |
| **POST** | `/loans/check-mora` | Ejecutar revisión de cuotas atrasadas | Admin |

### 💳 Tarjetas (Cards)
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/cards` | Listar todas las tarjetas registradas | Admin |
| **GET** | `/cards/:id` | Ver tarjetas por ID de cuenta | Admin |
| **POST** | `/cards/:id` | Decidir sobre solicitud (Aprobar/Rechazar) | Admin |
| **POST** | `/cards/:id/activate` | Activar una tarjeta aprobada | Admin |
| **POST** | `/cards/:id/block` | Bloquear tarjeta por seguridad | Admin |

### 💸 Transacciones y Movimientos
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/transactions` | Historial global de transacciones | Admin |
| **POST** | `/transactions` | Realizar transferencia administrativa | Admin |
| **GET** | `/transactions/:id` | Transacciones de una cuenta específica | Admin |
| **GET** | `/movements` | Listar todos los movimientos contables | Admin |
| **GET** | `/movements/:account_id` | Movimientos por cuenta específica | Admin |

---

## 📱 Panel de Cliente (User API)
**Base URL:** `http://localhost:3006/kinrural/v1/user`

### 👤 Perfil de Usuario
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/users` | Obtener mi información de perfil | User |
| **PUT** | `/users` | Actualizar mis datos personales | User |

### 💰 Mis Cuentas
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/accounts` | Consultar mis cuentas bancarias propias | User |

### 📩 Mis Solicitudes
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **GET** | `/account-requests` | Ver el estado de mis solicitudes de cuenta | User |
| **POST** | `/account-requests` | Solicitar la apertura de una nueva cuenta | User |

### 👥 Beneficiarios
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/beneficiaries` | Registrar un nuevo beneficiario para transferencias | User |
| **GET** | `/beneficiaries` | Listar mis beneficiarios registrados | User |
| **PUT** | `/beneficiaries/:id` | Editar datos de un beneficiario | User |
| **DELETE** | `/beneficiaries/:id` | Eliminar a un beneficiario | User |

### 💳 Mis Tarjetas
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/cards` | Solicitar una tarjeta de crédito o débito | User |
| **GET** | `/cards` | Ver mis tarjetas activas y sus estados | User |

### 📝 Mis Préstamos
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/loans/quote` | Cotizar/Simular un préstamo | User |
| **POST** | `/loans/request` | Enviar solicitud formal de préstamo | User |
| **GET** | `/loans/user/:user_id` | Ver historial de mis préstamos | User |

### 💸 Mis Transacciones
| Método | Endpoint | Descripción | Auth |
| :--- | :--- | :--- | :--- |
| **POST** | `/transactions` | Realizar una transferencia a terceros | User |
| **GET** | `/movements` | Ver mi historial de movimientos bancarios | User |

## ⚙️ Procesos Lógicos del Sistema

El sistema implementa las siguientes reglas de negocio automatizadas:

1. **Intereses Mensuales:** Se aplica una tasa del **5% anual** sobre el saldo de las cuentas de ahorro.
2. **Gestión de Mora:** Si una cuota de préstamo supera los **30 días de atraso**, el sistema la marca "EN_MORA" y aplica un recargo del **3%**.
3. **Límites de Cuenta:** Un usuario solo puede poseer máximo **2 cuentas de ahorro** y **1 cuenta monetaria**.
4. **Validación de Transferencias:** Existe un límite máximo acumulado de **Q10,000.00** en transferencias por día.
