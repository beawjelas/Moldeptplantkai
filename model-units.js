// =====================================================================
// DAFTAR UNIT: MODEL UNIT -> KODE UNIT
// Sumber: Unit Register (kolom Unit Model dan Unit Code)
// Dropdown Model Unit diambil dari nama model di bawah ini, dan dropdown Kode Unit
// hanya menampilkan kode milik model yang dipilih.
// Format: 'NAMA MODEL': [ 'KODE-1', 'KODE-2', ], (dalam tanda kutip, diakhiri koma)
// File ini harus berada di folder yang SAMA dengan mol_part.html
// =====================================================================
const UNIT_MAP = {
    '4DW81-23D': [
        'GSFW030',
    ],
    '4DW91-29D': [
        'GSGH001',
        'MTL012',
    ],
    '6LTA A8.9-G2': [
        'GSMD037',
        'GSMD038',
    ],
    'BIG BLUE 600X': [
        'WMML005',
    ],
    'C4.4': [
        'GSCT035',
        'GSCT036',
    ],
    'CMS50': [
        'WTLG032',
        'WTLG035',
        'WTLG057',
    ],
    'CMT106': [
        'DTLG001',
        'DTLG002',
        'DTLG003',
        'DTLG005',
        'DTLG006',
        'DTLG007',
        'DTLG008',
        'DTLG009',
        'DTLG010',
        'DTLG011',
        'DTLG012',
        'DTLG015',
        'DTLG016',
        'DTLG017',
        'DTLG018',
        'DTLG019',
        'DTLG020',
        'DTLG021',
        'DTLG022',
        'DTLG023',
        'DTLG025',
        'DTLG026',
        'DTLG027',
        'DTLG028',
        'DTLG030',
        'DTLG035',
        'DTLG036',
        'DTLG037',
        'DTLG039',
        'DTLG050',
        'DTLG051',
        'DTLG052',
        'DTLG053',
        'DTLG055',
        'DTLG075',
        'DTLG076',
        'DTLG077',
        'DTLG078',
        'DTLG079',
        'DTLG080',
        'DTLG081',
        'DTLG082',
        'DTLG083',
        'DTLG085',
        'DTLG086',
        'DTLG115',
        'DTLG116',
        'DTLG118',
        'DTLG121',
        'DTLG122',
    ],
    'D155A-6': [
        'BDKM110',
    ],
    'D375A-6R': [
        'BDKM109',
        'BDKM125',
    ],
    'D85ESS-2': [
        'BDKM098',
        'BDKM099',
        'BDKM100',
        'BDKM101',
        'BDKM102',
        'BDKM103',
    ],
    'DM30 XC': [
        'DREP002',
    ],
    'DND150': [
        'MPKSB011',
        'MPKSB012',
    ],
    'E6210F': [
        'EXSD001',
        'EXSD002',
        'EXSD003',
        'EXSD012',
    ],
    'E6215H': [
        'EXSD010',
        'EXSD011',
    ],
    'E6350H': [
        'EXSD005',
        'EXSD006',
        'EXSD008',
        'EXSD017',
        'EXSD018',
    ],
    'E6780H': [
        'EXSD019',
    ],
    'E6800H': [
        'EXSD028',
    ],
    'FD 30': [
        'FLZL006',
    ],
    'FD20S F': [
        'GSFD079',
        'MTL037A',
        'TLFD039',
        'TLFD050',
    ],
    'FH16': [
        'PMVV056',
    ],
    'FM 280 JD': [
        'FTHN020',
        'STHN015',
    ],
    'FM 500 TI': [
        'FTHN005',
    ],
    'G9220F': [
        'GDSD033',
        'GDSD035',
        'GDSD036',
        'GDSD051',
        'GDSD056',
        'GDSD057',
        'GDSD058',
    ],
    'HCR L100-E3': [
        'DRFK001',
    ],
    'HiLight V7+': [
        'TLAC066',
        'TLAC067',
        'TLAC068',
        'TLAC069',
    ],
    'Hilight V5+': [
        'TLAC051',
        'TLAC052',
        'TLAC053',
        'TLAC055',
        'TLAC056',
        'TLAC057',
        'TLAC058',
        'TLAC059',
        'TLAC060',
    ],
    'LCC-H150-500.4K AF M1': [
        'MPKSB027',
        'MPKSB028',
    ],
    'LH-16T': [
        'DL223',
    ],
    'LIGHT SOURCE COMPACT 60 HZ': [
        'TLDS015',
        'TLDS016',
        'TLDS017',
    ],
    'LOWBED 120 TON': [
        'LB005',
    ],
    'ME109': [
        'EXLG001',
        'EXLG002',
    ],
    'P360': [
        'STSC005',
        'STSC017',
    ],
    'PR 776': [
        'BDLB008',
        'BDLB009',
    ],
    'QUESTER CWE 370 6X4': [
        'CTNS015',
        'DTNS090',
        'DTNS091',
        'DTNS092',
        'DTNS093',
        'DTNS095',
        'DTNS096',
        'DTNS097',
        'DTNS098',
        'DTNS099',
        'DTNS100',
        'DTNS101',
        'DTNS102',
        'DTNS103',
        'DTNS105',
        'DTNS106',
        'DTNS107',
        'DTNS108',
        'DTNS109',
        'DTNS110',
        'DTNS111',
        'FTNS028',
        'WTNS050',
        'WTNS051',
        'WTNS052',
    ],
    'R1250-9S': [
        'EXHY001',
    ],
    'R210W-9S': [
        'EXHY005',
    ],
    'R9100': [
        'EXLB019',
        'EXLB020',
        'EXLB023',
        'EXLB025',
        'EXLB026',
    ],
    'REGALINE DIN200X150-500 H2': [
        'PTDS001',
    ],
    'SV526D': [
        'VBSK036',
        'VBSK037',
    ],
    'XE215C': [
        'EXXC003',
    ],
    'XE800D': [
        'EXXC039',
        'EXXC052',
        'EXXC053',
    ],
    'ZX350H-5G': [
        'EXHT006',
    ],
};
