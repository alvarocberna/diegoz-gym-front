export function KiAura() {
  return (
    <svg
      /* ================================
         AJUSTES PRINCIPALES DEL AURA
         - width / height: tamaño base del aura
         - scale: expansión general del aura
         ================================ */
      className="absolute inset-0 w-full h-full scale-120 "
      viewBox="0 0 300 330"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* ==================================
           DISTORSIÓN ANIMADA (forma viva)
           - scale: fuerza del movimiento
           ================================== */}
        <filter id="ki-distort-soft">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006"
            numOctaves="20" //sensación de mas o menos liso el la forma
            seed="5"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="10.0s"
              values="0.04;0.08;0.04" //turbulencia del movimiento
              repeatCount="indefinite"
            />
          </feTurbulence>

          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="30" 
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <filter id="ki-distort-strong">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="20"
            seed="9"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="5.0s"
              values="0.008;0.014;0.008"
              repeatCount="indefinite"
            />
          </feTurbulence>

          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="45" 
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* ==================================
           GLOW (profundidad visual)
           ================================== */}
        <filter id="ki-glow-soft">
          <feGaussianBlur stdDeviation="0" /> 
        </filter>

        <filter id="ki-glow-strong">
          <feGaussianBlur stdDeviation="15" />
        </filter>

        {/* ==================================
           GRADIENTE VERTICAL
           (suave abajo, intenso arriba)
           ================================== */}
        <linearGradient id="ki-gradient-outer" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(255, 200, 60, 0.35)" />
          <stop offset="60%" stopColor="rgba(255, 230, 90, 0.6)" />
          <stop offset="100%" stopColor="rgba(255, 255, 160, 0.8)" />
        </linearGradient>

        <linearGradient id="ki-gradient-inner" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(255, 220, 80, 0.6)" />
          <stop offset="60%" stopColor="rgba(255, 245, 120, 0.85)" />
          <stop offset="100%" stopColor="rgba(255, 255, 200, 1)" />
        </linearGradient>
      </defs>

      {/* ==================================
         CAPA EXTERNA DEL AURA
         - Más grande
         - Más blur
         - Movimiento más suave
         ================================== */}
      <path
        d="
       M150 20
          L135 60
          L120 45
          L110 90

          L95 70
          L90 120
          L70 100
          L75 150
          L50 130
          L70 180
          L40 165
          L75 210
          L45 200
          L90 245
          L55 245

          L115 290
          L90 295
          L135 300
          L120 300
          L150 300
          L180 300
          L165 300
          L210 295
          L185 290

          L245 245
          L210 245
          L255 200
          L225 210
          L260 165
          L230 180
          L250 130
          L225 150
          L230 100
          L205 120
          L200 70
          L185 90
          L180 45
          Z
        "
        fill="url(#ki-gradient-outer)"
        filter="url(#ki-distort-soft) url(#ki-glow-soft)"
        opacity="0.85"
      >
        {/* Pulso lento */}
        {/* <animateTransform
          attributeName="transform"
          type="scale"
          dur="1.9s"
          values="1;1.06;1"
          repeatCount="indefinite"
        /> */}
      </path>

      {/* ==================================
         CAPA INTERNA DEL AURA
         - Más definida
         - Menos blur
         - Movimiento más intenso
         ================================== */}
      <path
        d="
          M150 20
          L135 60
          L120 45
          L110 90

          L95 70
          L90 120
          L70 100
          L75 150
          L50 130
          L70 180
          L40 165
          L75 210
          L45 200
          L90 245
          L55 245

          L115 290
          L90 295
          L135 300
          L120 300
          L150 300
          L180 300
          L165 300
          L210 295
          L185 290

          L245 245
          L210 245
          L255 200
          L225 210
          L260 165
          L230 180
          L250 130
          L225 150
          L230 100
          L205 120
          L200 70
          L185 90
          L180 45
          Z
        "
        fill="url(#ki-gradient-inner)"
        filter="url(#ki-distort-strong) url(#ki-glow-strong)"
        opacity="1"
      >
        {/* Pulso rápido */}
        {/* <animateTransform
          attributeName="transform"
          type="scale"
          dur="1.2s"
          values="1;1.08;1"
          repeatCount="indefinite"
        /> */}
      </path>
    </svg>
  );
}
