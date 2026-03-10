export function KiAura() {
  return (
    <svg
      className="absolute inset-0 w-full h-full scale-120"
      viewBox="0 0 300 330"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/*
          CAPA EXTERNA: distorsión suave + blur suave
          Las primitivas se encadenan: feTurbulence → feDisplacementMap → feGaussianBlur
          x/y/width/height amplían la región del filtro para que el blur no se recorte
        */}
        <filter id="ki-filter-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="3"
            seed="5"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="10.0s"
              values="0.04;0.08;0.04"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="G"
            result="distorted"
          />
          <feGaussianBlur in="distorted" stdDeviation="2" />
        </filter>

        {/*
          CAPA INTERNA: distorsión fuerte + blur fuerte
        */}
        <filter id="ki-filter-strong" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008"
            numOctaves="3"
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
            result="distorted"
          />
          <feGaussianBlur in="distorted" stdDeviation="15" />
        </filter>

        <linearGradient id="ki-gradient-outer" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%"   stopColor="rgba(255, 200, 60, 0.35)" />
          <stop offset="60%"  stopColor="rgba(255, 230, 90, 0.6)"  />
          <stop offset="100%" stopColor="rgba(255, 255, 160, 0.8)" />
        </linearGradient>

        <linearGradient id="ki-gradient-inner" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%"   stopColor="rgba(255, 220, 80, 0.6)"  />
          <stop offset="60%"  stopColor="rgba(255, 245, 120, 0.85)" />
          <stop offset="100%" stopColor="rgba(255, 255, 200, 1)"   />
        </linearGradient>
      </defs>

      {/* Capa externa */}
      <path
        d="
          M150 20
          L135 60  L120 45  L110 90
          L95  70  L90  120 L70  100
          L75  150 L50  130 L70  180
          L40  165 L75  210 L45  200
          L90  245 L55  245
          L115 290 L90  295 L135 300
          L120 300 L150 300 L180 300
          L165 300 L210 295 L185 290
          L245 245 L210 245 L255 200
          L225 210 L260 165 L230 180
          L250 130 L225 150 L230 100
          L205 120 L200 70  L185 90
          L180 45
          Z
        "
        fill="url(#ki-gradient-outer)"
        filter="url(#ki-filter-soft)"
        opacity="0.85"
      />

      {/* Capa interna */}
      <path
        d="
          M150 20
          L135 60  L120 45  L110 90
          L95  70  L90  120 L70  100
          L75  150 L50  130 L70  180
          L40  165 L75  210 L45  200
          L90  245 L55  245
          L115 290 L90  295 L135 300
          L120 300 L150 300 L180 300
          L165 300 L210 295 L185 290
          L245 245 L210 245 L255 200
          L225 210 L260 165 L230 180
          L250 130 L225 150 L230 100
          L205 120 L200 70  L185 90
          L180 45
          Z
        "
        fill="url(#ki-gradient-inner)"
        filter="url(#ki-filter-strong)"
        opacity="1"
      />
    </svg>
  );
}
