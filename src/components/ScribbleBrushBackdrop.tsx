import React from 'react';

interface ScribbleBrushBackdropProps {
  className?: string;
}

export const ScribbleBrushBackdrop: React.FC<ScribbleBrushBackdropProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 800 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[118%] sm:w-[125%] lg:w-[132%] h-[108%] sm:h-[114%] object-contain origin-bottom filter drop-shadow-[0_16px_32px_rgba(255,184,0,0.18)]"
        aria-hidden="true"
      >
        <defs>
          {/* Authentic Dry-Brush Grain & Bristle Edge Displacement */}
          <filter id="dryBrushBristleFilter" x="-15%" y="-15%" width="130%" height="130%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.07" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          {/* Gradients reflecting the exact tonal layers in the reference image:
              - Deep golden yellow on top-left/center (#FFAE00 -> #FFC928)
              - Bright vibrant sunny yellow across mid-stroke (#FFCA28 -> #FFD64D)
              - Lighter pastel gouache wash at bottom-right (#FFE57F -> #FFF3A8) */}
          <linearGradient id="mainBrushGrad" x1="140" y1="800" x2="680" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFAE00" />
            <stop offset="25%" stopColor="#FFBA00" />
            <stop offset="60%" stopColor="#FFC928" />
            <stop offset="90%" stopColor="#FFD44B" />
            <stop offset="100%" stopColor="#FFDE6A" />
          </linearGradient>

          <linearGradient id="deepGoldGrad" x1="180" y1="720" x2="580" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5A000" />
            <stop offset="50%" stopColor="#FFAE00" />
            <stop offset="100%" stopColor="#FFC418" />
          </linearGradient>

          <linearGradient id="lightYellowWashGrad" x1="260" y1="880" x2="720" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE066" stopOpacity="0.88" />
            <stop offset="55%" stopColor="#FFEA8A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFF2B2" stopOpacity="0.72" />
          </linearGradient>

          <linearGradient id="bristleGrad1" x1="380" y1="400" x2="720" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFC928" />
            <stop offset="100%" stopColor="#FFD65C" />
          </linearGradient>
        </defs>

        {/* ============================================================
            SECTION 1: ORGANIC PAINT SPLATTERS (Matching exact reference)
            ============================================================ */}
        <g id="reference-paint-splatters">
          {/* UPPER-LEFT SPLATTER CLUSTER */}
          {/* Main solid medium droplet (x: 155, y: 265) */}
          <circle cx="155" cy="265" r="16" fill="#FFC015" />
          <circle cx="105" cy="315" r="5" fill="#FFB000" />
          <circle cx="132" cy="310" r="4" fill="#FFC928" />
          <circle cx="95" cy="365" r="4.5" fill="#FFBA08" />
          <circle cx="75" cy="405" r="3.5" fill="#FFB000" />
          <circle cx="120" cy="425" r="4" fill="#FFD038" />
          <circle cx="85" cy="465" r="3" fill="#FFBA08" />
          <circle cx="105" cy="510" r="2.5" fill="#FFAE00" />
          <circle cx="245" cy="190" r="8" fill="#FFC015" />
          <circle cx="205" cy="225" r="5" fill="#FFBA08" />

          {/* TOP EDGE SPLATTERS */}
          <circle cx="355" cy="90" r="5" fill="#FFB800" />
          <circle cx="395" cy="72" r="4" fill="#FFC928" />
          <circle cx="430" cy="98" r="3.5" fill="#FFD038" />
          <circle cx="480" cy="115" r="4.5" fill="#FFC015" />
          <circle cx="585" cy="95" r="3" fill="#FFBA08" />

          {/* BOTTOM SPLATTER CLUSTER */}
          {/* Two prominent solid round droplets at the bottom */}
          <circle cx="475" cy="860" r="15" fill="#FFBA08" />
          <circle cx="540" cy="895" r="16" fill="#FFC218" />
          <circle cx="420" cy="880" r="4" fill="#FFAE00" />
          <circle cx="468" cy="900" r="3.5" fill="#FFBA08" />
          <circle cx="495" cy="925" r="3" fill="#FFC928" />
          <circle cx="510" cy="915" r="4" fill="#FFAE00" />
          <circle cx="600" cy="880" r="4" fill="#FFBA08" />
          <circle cx="630" cy="855" r="6" fill="#FFC015" />
          <circle cx="650" cy="820" r="4.5" fill="#FFC928" />
          <circle cx="675" cy="790" r="5" fill="#FFD038" />
          <circle cx="705" cy="745" r="3.5" fill="#FFBA08" />
          <circle cx="725" cy="705" r="3" fill="#FFC928" />

          {/* LOWER-LEFT EDGE FLECK ACCENTS */}
          <circle cx="80" cy="650" r="4" fill="#FFAE00" />
          <circle cx="95" cy="685" r="4.5" fill="#FFB800" />
          <circle cx="125" cy="770" r="5.5" fill="#FFC218" />
          <circle cx="165" cy="815" r="4" fill="#FFBA08" />
          <circle cx="260" cy="905" r="3.5" fill="#FFAE00" />
          <circle cx="310" cy="935" r="3" fill="#FFB800" />

          {/* RIGHT EDGE SPLATTER SPRAY */}
          <circle cx="740" cy="415" r="3.5" fill="#FFBA08" />
          <circle cx="765" cy="485" r="4" fill="#FFC928" />
          <circle cx="735" cy="565" r="3" fill="#FFD038" />
        </g>

        {/* ============================================================
            SECTION 2: DEEP GOLDEN UNDER-LAYER (Tone Depth #FFAE00)
            ============================================================ */}
        <g id="brush-deep-layer" filter="url(#dryBrushBristleFilter)">
          <path
            d="M 120 740
               C 85 640, 75 520, 130 420
               C 180 330, 260 250, 360 180
               C 450 120, 560 90, 640 130
               C 700 170, 720 270, 680 390
               C 640 500, 540 620, 440 710
               C 340 800, 210 830, 140 770
               Z"
            fill="url(#deepGoldGrad)"
            opacity="0.9"
          />

          {/* Bottom-left dry bristle streaks */}
          <path d="M 100 680 Q 55 740 40 800 Q 95 765 140 720 Z" fill="#FFAE00" />
          <path d="M 130 730 Q 80 810 65 860 Q 125 810 170 760 Z" fill="#FFBA08" />
          <path d="M 160 760 Q 120 860 115 905 Q 170 850 210 795 Z" fill="#FFAE00" />
          <path d="M 210 790 Q 175 885 180 930 Q 225 870 260 820 Z" fill="#FFC218" />
          <path d="M 260 815 Q 240 895 255 935 Q 285 880 315 830 Z" fill="#FFAE00" />
        </g>

        {/* ============================================================
            SECTION 3: MAIN DENSE VIBRANT YELLOW BRUSH BODY (#FFC928)
            Spacious, solid, calm central body for the portrait
            ============================================================ */}
        <g id="brush-main-layer" filter="url(#dryBrushBristleFilter)">
          {/* Main solid body sweeping diagonally from bottom-left to top-right */}
          <path
            d="M 135 710
               C 95 610, 85 490, 145 390
               C 195 300, 280 220, 390 155
               C 485 100, 595 75, 665 125
               C 730 170, 755 270, 715 400
               C 675 515, 570 645, 460 735
               C 360 820, 220 835, 155 760
               Z"
            fill="url(#mainBrushGrad)"
          />

          {/* Distinct Top-Right Dry-Brush Bristle Tails (Stepped Tiers as in reference) */}
          {/* Tier 1 (Highest bristle tip extending up-right) */}
          <path d="M 490 140 Q 560 90 625 55 Q 590 110 535 155 Z" fill="url(#bristleGrad1)" />
          <path d="M 525 130 Q 605 75 675 45 Q 640 105 575 150 Z" fill="#FFC928" />
          <path d="M 560 135 Q 645 80 710 65 Q 670 120 610 160 Z" fill="#FFD65C" />
          <path d="M 590 150 Q 680 100 740 95 Q 695 140 640 180 Z" fill="#FFC928" />

          {/* Tier 2 (Upper-mid bristle tails extending right) */}
          <path d="M 620 180 Q 710 140 765 150 Q 715 185 665 215 Z" fill="#FFBA08" />
          <path d="M 645 210 Q 735 180 780 205 Q 725 230 680 255 Z" fill="#FFC928" />
          <path d="M 665 245 Q 750 230 790 260 Q 735 275 690 295 Z" fill="#FFD65C" />
          <path d="M 670 280 Q 755 280 790 315 Q 735 320 690 335 Z" fill="#FFC928" />

          {/* Tier 3 (Middle-right bristle tier) */}
          <path d="M 670 325 Q 745 335 775 375 Q 725 375 680 380 Z" fill="#FFBA08" />
          <path d="M 655 370 Q 725 395 750 435 Q 705 430 660 425 Z" fill="#FFC928" />
          <path d="M 635 415 Q 700 450 720 495 Q 675 485 635 470 Z" fill="#FFD65C" />

          {/* Left-Side Feathered Dry-Brush Bristles */}
          <path d="M 155 395 Q 95 350 65 315 Q 115 365 170 415 Z" fill="#FFBA08" />
          <path d="M 135 440 Q 80 405 50 380 Q 100 425 150 465 Z" fill="#FFC928" />
          <path d="M 125 490 Q 65 470 35 455 Q 90 490 140 525 Z" fill="#FFD65C" />
          <path d="M 115 540 Q 60 535 30 540 Q 85 555 135 575 Z" fill="#FFBA08" />
          <path d="M 115 590 Q 60 600 35 620 Q 90 615 135 625 Z" fill="#FFC928" />
          <path d="M 125 640 Q 70 665 45 695 Q 100 675 145 675 Z" fill="#FFD65C" />
        </g>

        {/* ============================================================
            SECTION 4: LOWER-RIGHT PASTEL YELLOW WASH LAYER
            (Matches the softer, luminous stroke on the lower right in ref)
            ============================================================ */}
        <g id="brush-pastel-wash" filter="url(#dryBrushBristleFilter)">
          <path
            d="M 270 800
               C 340 730, 440 660, 540 600
               C 620 550, 700 525, 735 550
               C 770 580, 770 650, 730 725
               C 680 810, 580 880, 480 910
               C 400 930, 320 890, 270 800
               Z"
            fill="url(#lightYellowWashGrad)"
          />

          {/* Feathered dry brush ends for the pastel stroke */}
          <path d="M 520 860 Q 585 910 635 940 Q 600 890 560 850 Z" fill="#FFE57F" opacity="0.8" />
          <path d="M 450 880 Q 500 940 540 970 Q 510 920 475 870 Z" fill="#FFF0A4" opacity="0.75" />
          <path d="M 370 870 Q 405 945 425 980 Q 410 920 385 865 Z" fill="#FFE57F" opacity="0.8" />
        </g>

        {/* Fine Longitudinal Grain / Striation Lines along the brush sweep */}
        <g id="brush-bristle-grain" opacity="0.28" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round">
          <line x1="220" y1="680" x2="520" y2="280" />
          <line x1="240" y1="710" x2="560" y2="290" />
          <line x1="280" y1="730" x2="600" y2="310" />
          <line x1="180" y1="580" x2="480" y2="210" />
          <line x1="200" y1="610" x2="510" y2="230" />
          <line x1="330" y1="760" x2="640" y2="380" />
          <line x1="360" y1="780" x2="670" y2="400" />
        </g>

        {/* ============================================================
            SECTION 5: THE EXACT 3 BLACK CALLIGRAPHIC SCRIBBLE LINES
            (#111111 - 100% matched to reference image file_00000000d96481fa8d6741426787f1ca.png)
            ============================================================ */}
        <g id="three-calligraphic-scribbles">
          {/* ------------------------------------------------------------
              SCRIBBLE 1 (Top / Upper Long Loop)
              Sweeps up from mid-left across the top of yellow paint,
              loops roundedly at top right, and heads back inwards.
              ------------------------------------------------------------ */}
          <path
            d="M 42 515
               C 85 390, 195 270, 340 185
               C 415 142, 475 125, 512 145
               C 525 152, 524 162, 510 178
               C 490 200, 460 230, 442 245
               C 440 247, 438 244, 440 240
               C 460 215, 495 178, 502 160
               C 506 148, 480 148, 420 172
               C 280 230, 165 345, 68 460
               C 55 478, 45 500, 42 515
               Z"
            fill="#111111"
          />

          {/* ------------------------------------------------------------
              SCRIBBLE 2 (Lower-Left Sharp Acute Hairpin Loop)
              Shoots up-right from bottom-left to center-left,
              makes a sharp acute hairpin bend, and extends back down-left.
              ------------------------------------------------------------ */}
          <path
            d="M 55 750
               C 95 700, 160 625, 230 575
               C 260 555, 285 552, 288 564
               C 290 572, 275 588, 255 615
               C 220 660, 195 710, 180 735
               C 178 738, 175 735, 177 730
               C 195 695, 230 635, 268 585
               C 278 572, 280 565, 275 562
               C 265 558, 240 570, 205 595
               C 145 640, 85 705, 55 750
               Z"
            fill="#111111"
          />

          {/* ------------------------------------------------------------
              SCRIBBLE 3 (Lower-Right Smooth Arc / Hairpin Loop)
              Arcs from center-right downwards to the far right,
              loops around smoothly at the far right edge, pointing inward.
              ------------------------------------------------------------ */}
          <path
            d="M 465 615
               C 525 570, 615 505, 715 470
               C 755 458, 778 468, 775 488
               C 772 505, 745 538, 710 572
               C 695 588, 688 595, 686 592
               C 686 588, 695 580, 712 560
               C 740 525, 762 495, 764 485
               C 765 475, 745 470, 700 482
               C 610 515, 520 575, 465 615
               Z"
            fill="#111111"
          />
        </g>
      </svg>
    </div>
  );
};
