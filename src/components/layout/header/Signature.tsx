'use client';

import { useTheme } from 'next-themes';

export default function Signature() {
  const { theme } = useTheme();

  return <svg className=" cursor-pointer" width="160" viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-180,250) scale(0.15,-0.15)">
      <path id='signaturePath' stroke={theme === 'dark' ? "#fff" : '#303030'} strokeWidth="2"
        d="M5198 1492 c-85 -96 -185 -305 -262 -553 -31 -101 -43 -124 -82 -168
-26 -29 -50 -51 -54 -49 -4 2 -23 23 -42 48 l-34 46 46 41 c56 50 80 96 80
151 0 102 -125 136 -205 56 -37 -36 -62 -80 -95 -163 -27 -68 -7 -75 26 -9 45
89 84 139 121 155 42 17 60 12 72 -20 21 -53 -26 -151 -86 -184 -39 -21 -40
-24 -12 -49 22 -19 58 -88 59 -111 0 -6 -46 -40 -102 -74 -122 -76 -187 -136
-189 -176 -3 -70 12 -86 80 -84 72 1 142 34 196 92 56 60 84 120 88 188 3 45
8 56 55 105 l52 55 0 -47 c0 -77 37 -123 75 -92 7 6 37 64 65 129 60 136 94
181 139 181 40 0 49 -33 31 -110 -22 -96 -24 -149 -5 -170 38 -42 117 -33 186
21 l36 28 12 -40 c10 -32 20 -44 48 -56 32 -13 40 -13 79 2 27 10 61 36 89 67
l45 50 0 -29 c0 -18 9 -38 24 -52 45 -42 132 -25 199 38 l29 26 -7 -26 c-6
-23 -3 -28 26 -38 18 -6 33 -10 35 -9 1 2 33 50 71 108 97 147 168 205 220
181 28 -13 31 -60 8 -135 -33 -109 -11 -156 73 -156 50 0 96 25 135 73 25 31
67 113 67 132 0 27 -14 16 -39 -30 -51 -96 -126 -160 -157 -134 -20 16 -17 46
11 127 29 84 30 99 9 151 -11 28 -24 43 -46 50 -65 23 -141 -21 -231 -134 -22
-27 -37 -41 -34 -30 16 54 26 115 21 129 -7 19 -54 21 -76 4 -9 -7 -18 -34
-22 -61 -3 -26 -13 -62 -22 -80 -44 -87 -144 -175 -183 -162 -38 12 -37 50 3
128 20 40 36 77 36 84 0 11 -30 33 -44 33 -2 0 -36 -42 -75 -94 -78 -104 -128
-152 -167 -162 -112 -28 19 291 146 356 21 11 48 20 59 20 27 0 51 -37 51 -77
0 -37 18 -43 45 -16 20 19 14 67 -12 95 -40 44 -136 42 -211 -6 -59 -38 -135
-125 -177 -204 -69 -132 -184 -208 -193 -127 -2 17 8 67 23 112 20 60 26 91
21 118 -10 51 -46 85 -91 85 -77 0 -135 -56 -202 -195 l-44 -90 6 65 c11 127
25 161 106 242 140 140 235 358 199 452 -16 42 -51 34 -102 -22z m47 -130
c-10 -26 -32 -72 -48 -102 -34 -62 -127 -193 -133 -187 -14 14 96 238 154 314
41 54 52 43 27 -25z m-540 -804 c-32 -78 -134 -168 -190 -168 -37 0 -49 18
-36 53 14 36 49 66 145 129 76 49 91 56 94 40 2 -9 -4 -34 -13 -54z M1789 1295 c-31 -17 -42 -47 -25 -71 25 -34 107 -10 121 36 14 45
-41 65 -96 35z M2133 1295 c-27 -11 -53 -41 -53 -59 0 -2 7 -12 16 -20 32 -33 104
-9 118 39 12 41 -30 62 -81 40z M1743 1063 c-64 -116 -117 -293 -60 -204 11 18 21 30 23 28 6 -5 -42
-187 -57 -221 -7 -14 -36 -39 -66 -56 -134 -76 -209 -193 -157 -244 19 -20 76
-21 112 -2 46 25 126 146 159 242 8 22 27 40 67 63 31 17 74 48 96 67 l40 36
0 -25 c0 -111 126 -131 233 -37 l37 32 -12 -33 c-9 -28 -8 -34 7 -46 36 -26
54 -16 80 43 52 117 176 272 232 288 16 5 25 1 33 -14 14 -26 8 -56 -37 -194
-19 -59 -31 -112 -26 -116 4 -4 20 -10 34 -14 23 -5 28 -1 40 27 23 57 150
238 174 249 54 24 68 -13 40 -106 -19 -62 -19 -126 0 -152 31 -45 116 -37 171
17 l32 31 -6 -27 c-5 -29 10 -45 43 -45 15 1 29 20 57 78 69 142 198 286 242
269 26 -10 19 -77 -20 -198 -19 -61 -33 -116 -31 -123 3 -8 17 -16 32 -18 23
-5 29 0 50 42 29 58 108 176 143 213 30 32 68 36 77 7 3 -11 -3 -54 -15 -96
-31 -111 -17 -162 52 -179 41 -10 114 29 151 81 l30 43 21 -32 c48 -70 135
-56 206 34 46 59 47 53 5 -71 -21 -64 -23 -66 -93 -105 -116 -66 -162 -118
-162 -184 0 -39 28 -61 80 -61 38 0 48 5 86 44 24 26 63 87 91 144 42 87 53
101 92 122 96 52 203 182 175 210 -8 8 -17 -1 -34 -32 -12 -24 -36 -58 -53
-76 -36 -37 -95 -77 -103 -69 -3 3 5 36 19 74 34 94 61 217 54 237 -5 13 -13
15 -29 11 -35 -11 -49 -28 -59 -74 -10 -46 -71 -135 -115 -170 -32 -25 -72
-24 -88 1 -11 19 19 138 55 211 10 23 19 44 19 47 0 11 -49 30 -63 24 -19 -7
-51 -67 -72 -134 -39 -121 -101 -212 -157 -225 -45 -11 -50 21 -20 134 28 107
26 142 -13 167 -50 33 -123 -2 -188 -91 -24 -33 -29 -36 -24 -15 17 77 18 118
3 153 -14 34 -19 37 -54 37 -53 0 -119 -44 -183 -124 -29 -36 -54 -65 -55 -63
-1 1 2 23 8 49 14 58 6 78 -29 78 -41 0 -50 -10 -58 -60 -24 -146 -138 -303
-189 -261 -21 18 -20 43 4 119 22 69 26 133 10 162 -29 55 -135 22 -196 -61
-19 -27 -37 -49 -39 -49 -2 0 1 15 6 32 14 51 11 131 -7 156 -18 26 -70 30
-112 8 -29 -16 -128 -115 -156 -156 -18 -28 -20 -15 -7 44 13 52 5 66 -34 66
-40 0 -51 -12 -58 -72 -9 -68 -44 -136 -102 -195 -43 -44 -57 -53 -86 -53 -47
0 -59 15 -59 72 0 39 11 70 61 167 37 71 59 125 56 135 -10 25 -51 19 -79 -11
-28 -30 -78 -125 -97 -185 -7 -20 -30 -57 -53 -82 -41 -48 -125 -112 -134
-103 -3 3 6 43 20 88 36 118 66 269 60 296 -10 37 -47 30 -71 -14z m2152 -553
c-53 -100 -115 -148 -130 -101 -12 40 21 89 92 135 37 24 70 43 71 41 2 -2
-13 -35 -33 -75z m-2285 64 c0 -16 -72 -123 -103 -153 -64 -61 -82 2 -20 70
49 54 123 104 123 83z"/>
    </g></svg>
}