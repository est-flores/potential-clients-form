# Potential Clients Form

Este proyecto es un formulario para capturar los datos de candidatos de posibles clientes.

## Descripción

El formulario permite capturar los siguientes datos:
- Nombre
- Apellido
- Fecha de nacimiento
- Género
- Teléfono celular
- Teléfono de casa
- Dirección
- Profesión
- Ingresos

## Requisitos

Tener instalado:
- Docker

## Instrucciones para ejecutar la imagen Docker

Seguir los pasos a continuación para ejecutar la aplicación utilizando Docker:

1. **Clonar el repositorio desde GitHub**:

   ```bash
   git clone https://github.com/est-flores/potential-clients-form
   cd unicomer-form
   
2. **Navegar al directorio del proyecto**:
    ```bash
    cd potential-clients-form

3. **Construir la imagen de Docker**:

    ```bash
    docker build -t potential-clients-form

4. **Ejecutar la imagen de Docker**:

    ```bash
    docker run -p 3000:3000 potential-clients-form

5. **Abrir navegador e ir a http://localhost:3000 para ver el formulario.**