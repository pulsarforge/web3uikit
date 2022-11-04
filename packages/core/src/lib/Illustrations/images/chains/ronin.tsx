import { Size } from '../../types';

const roninLogo = (width: Size = '120', height: Size = '160') => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 120 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M89.3265 22C94.6671 22 99 26.5179 99 31.9598V63.7902V64.0982C98.8992 70.567 92.5383 75.8008 86.1901 75.9034C92.5383 76.0061 98.8992 81.2455 99 87.7143V88.0223V107.942C99 110.817 97.7908 113.487 95.7755 115.335L71.3903 137V92.4375C71.3903 86.9955 67.0574 82.5804 61.7168 82.5804H47.5089V137L23.2245 115.129C21.1084 113.281 20 110.612 20 107.737V31.8571C20 26.4152 24.3329 22 29.6735 22H89.3265ZM71.3903 35.7589H47.5089V66.0491H61.7168C67.0574 66.0491 71.3903 61.6339 71.3903 56.192V35.7589Z"
                fill="url(#paint0_linear_19829_44322)"
            />
            <path
                d="M99 64.0982L99.9999 64.1138C100 64.1086 100 64.1034 100 64.0982H99ZM86.1901 75.9034L86.174 74.9036V76.9033L86.1901 75.9034ZM99 87.7143H100C100 87.7091 100 87.7039 99.9999 87.6987L99 87.7143ZM95.7755 115.335L96.4397 116.082C96.4436 116.079 96.4475 116.075 96.4514 116.072L95.7755 115.335ZM71.3903 137H70.3903C70.3903 137.394 70.6214 137.751 70.9805 137.912C71.3397 138.074 71.7601 138.009 72.0545 137.748L71.3903 137ZM47.5089 82.5804V81.5804C46.9566 81.5804 46.5089 82.0281 46.5089 82.5804H47.5089ZM47.5089 137L46.8397 137.743C47.1332 138.007 47.5548 138.074 47.9156 137.914C48.2765 137.753 48.5089 137.395 48.5089 137H47.5089ZM23.2245 115.129L23.8937 114.386C23.8899 114.383 23.8861 114.38 23.8823 114.376L23.2245 115.129ZM71.3903 35.7589H72.3903C72.3903 35.2066 71.9426 34.7589 71.3903 34.7589V35.7589ZM47.5089 35.7589V34.7589C46.9566 34.7589 46.5089 35.2066 46.5089 35.7589H47.5089ZM47.5089 66.0491H46.5089C46.5089 66.6014 46.9566 67.0491 47.5089 67.0491V66.0491ZM89.3265 23C94.0839 23 98 27.0387 98 31.9598H100C100 25.997 95.2503 21 89.3265 21V23ZM98 31.9598V63.7902H100V31.9598H98ZM98 63.7902V64.0982H100V63.7902H98ZM98.0001 64.0826C97.9549 66.9829 96.5044 69.6578 94.2735 71.6407C92.04 73.6259 89.0881 74.8564 86.174 74.9036L86.2063 76.9033C89.6404 76.8478 93.0431 75.4101 95.6022 73.1356C98.164 70.8586 99.9443 67.6823 99.9999 64.1138L98.0001 64.0826ZM86.1901 76.9034H87.5417V74.9034H86.1901V76.9034ZM86.174 76.9033C89.0878 76.9504 92.0396 78.1822 94.2733 80.1688C96.5043 82.1531 97.9549 84.8295 98.0001 87.7299L99.9999 87.6987C99.9443 84.1304 98.1641 80.9527 95.6024 78.6744C93.0434 76.3984 89.6407 74.9591 86.2063 74.9036L86.174 76.9033ZM98 87.7143V88.0223H100V87.7143H98ZM98 88.0223V107.942H100V88.0223H98ZM98 107.942C98 110.536 96.9092 112.938 95.0996 114.598L96.4514 116.072C98.6725 114.035 100 111.098 100 107.942H98ZM95.1113 114.587L70.7261 136.252L72.0545 137.748L96.4397 116.082L95.1113 114.587ZM72.3903 137V92.4375H70.3903V137H72.3903ZM72.3903 92.4375C72.3903 86.4611 67.6273 81.5804 61.7168 81.5804V83.5804C66.4875 83.5804 70.3903 87.53 70.3903 92.4375H72.3903ZM61.7168 81.5804H47.5089V83.5804H61.7168V81.5804ZM46.5089 82.5804V137H48.5089V82.5804H46.5089ZM48.1781 136.257L23.8937 114.386L22.5553 115.873L46.8397 137.743L48.1781 136.257ZM23.8823 114.376C22.0051 112.737 21 110.353 21 107.737H19C19 110.871 20.2118 113.826 22.5667 115.883L23.8823 114.376ZM21 107.737V31.8571H19V107.737H21ZM21 31.8571C21 26.9496 24.9028 23 29.6735 23V21C23.763 21 19 25.8807 19 31.8571H21ZM29.6735 23H89.3265V21H29.6735V23ZM71.3903 34.7589H47.5089V36.7589H71.3903V34.7589ZM46.5089 35.7589V66.0491H48.5089V35.7589H46.5089ZM47.5089 67.0491H61.7168V65.0491H47.5089V67.0491ZM61.7168 67.0491C67.6273 67.0491 72.3903 62.1684 72.3903 56.192H70.3903C70.3903 61.0995 66.4875 65.0491 61.7168 65.0491V67.0491ZM72.3903 56.192V35.7589H70.3903V56.192H72.3903Z"
                fill="white"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_19829_44322"
                    x1="31"
                    y1="112.5"
                    x2="104"
                    y2="13"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" stop-opacity="0.06" />
                    <stop offset="1" stop-color="white" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default roninLogo;
