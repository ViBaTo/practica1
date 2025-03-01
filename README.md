# Contador React

Un simple contador implementado con React que demuestra conceptos fundamentales como componentes, props, estados y estilizado modular.

![Screenshot del Contador](https://via.placeholder.com/600x300.png?text=Contador+React)

## Características

- Incremento y decremento del contador
- Componentes modulares con separación de responsabilidades
- Estilizado CSS específico para cada componente
- Interfaz responsiva y centrada
- Manejo dinámico del texto singular/plural ("time"/"times")

## Estructura del Proyecto

```
contador-react/
├── public/
├── src/
│   ├── App.jsx           # Componente principal con la lógica del contador
│   ├── App.css           # Estilos para el componente App
│   ├── ShowCount.jsx     # Componente hijo para mostrar el contador
│   ├── ShowCount.css     # Estilos específicos para ShowCount
│   ├── index.js          # Punto de entrada de la aplicación
│   └── index.css         # Estilos globales
├── package.json
└── README.md
```

## Tecnologías Utilizadas

- React 18
- CSS3
- JavaScript ES6+

## Conceptos Implementados

1. **Componentes de React**
   - Componentes funcionales con responsabilidades bien definidas
   - Comunicación entre componentes mediante props

2. **Estados en React**
   - Uso del hook `useState` para gestionar el valor del contador
   - Actualización del estado mediante funciones controladas

3. **Estilizado Modular**
   - Archivos CSS separados para cada componente
   - Técnicas avanzadas de centrado con flexbox

4. **Condicionales en JSX**
   - Lógica condicional para el texto singular/plural

## Instalación y Ejecución

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/contador-react.git
   cd contador-react
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia la aplicación en modo desarrollo:
   ```bash
   npm start
   ```

4. Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

## Aprendizajes Clave

- La importancia de utilizar estados en React para manejar datos que cambian
- Cómo pasar datos desde un componente padre a un componente hijo
- Técnicas de estilizado para centrar elementos correctamente
- Separación de componentes para mejor mantenimiento y reutilización



Proyecto creado como práctica para aprendizaje de React.
