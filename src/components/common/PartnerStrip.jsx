import {
  ShieldCheck,
  Network,
  LockKeyhole,
  ScanSearch,
  ArrowUpRight,
} from 'lucide-react'

import { useState } from 'react'


function PartnerStrip() {

  const [activePartner, setActivePartner] =
    useState(null)


  const partners = [
    {
      name: 'DIGITAL SAFETY',
      short: 'DS',
      icon: ShieldCheck,
      tone: '#0EA66B',
      description:
        'Literasi keamanan digital',
    },

    {
      name: 'TRUST LAB',
      short: 'TL',
      icon: LockKeyhole,
      tone: '#3977E8',
      description:
        'Mendorong kepercayaan digital',
    },

    {
      name: 'CYBER COMMUNITY',
      short: 'CC',
      icon: Network,
      tone: '#7C4DDB',
      description:
        'Kolaborasi masyarakat digital',
    },

    {
      name: 'SAFE WEB',
      short: 'SW',
      icon: ScanSearch,
      tone: '#E69A13',
      description:
        'Membangun ruang web yang aman',
    },
  ]


  return (

    <section className="section partner-section">

      <div className="container">

        <div
          className="partner-strip"
          style={{
            position: 'relative',
            overflow: 'hidden',

            padding:
              '22px 24px',

            border:
              '1px solid rgba(13, 52, 79, .08)',

            borderRadius:
              '18px',

            background:
              'linear-gradient(135deg, #FFFFFF 0%, #FAFFFC 62%, #F4FBF8 100%)',

            boxShadow:
              '0 14px 40px rgba(21, 56, 77, .06)',

            gap:
              '28px',
          }}
        >

          {/* =====================================
              DECORATIVE NETWORK
          ===================================== */}

          <div
            aria-hidden="true"
            style={{
              position: 'absolute',

              width: '220px',
              height: '220px',

              right: '-95px',
              top: '-125px',

              border:
                '1px solid rgba(16,185,129,.10)',

              borderRadius:
                '50%',

              boxShadow:
                '0 0 0 26px rgba(16,185,129,.025), 0 0 0 52px rgba(16,185,129,.018)',

              pointerEvents:
                'none',
            }}
          />


          <div
            aria-hidden="true"
            style={{
              position: 'absolute',

              width: '7px',
              height: '7px',

              right: '108px',
              top: '27px',

              borderRadius:
                '50%',

              background:
                '#16C784',

              boxShadow:
                '0 0 14px rgba(22,199,132,.45)',

              pointerEvents:
                'none',
            }}
          />


          {/* =====================================
              HEADING
          ===================================== */}

          <div
            className="partner-heading"
            style={{
              position: 'relative',
              zIndex: 2,

              minWidth: '270px',
            }}
          >

            <span>
              EKOSISTEM
            </span>


            <strong>
              Kolaborasi untuk
              ruang digital aman
            </strong>


            <p
              style={{
                marginTop: '8px',
                marginBottom: 0,

                maxWidth: '430px',

                color: '#66788B',

                fontSize: '12px',
                lineHeight: 1.55,
              }}
            >
              JAGA dirancang untuk tumbuh
              melalui kolaborasi, literasi,
              dan kepedulian terhadap
              keamanan digital.
            </p>


            <div
              style={{
                display: 'flex',
                alignItems: 'center',

                gap: '8px',

                marginTop: '12px',

                color: '#4C6778',

                fontSize: '10px',
                fontWeight: 700,
              }}
            >

              <span
                style={{
                  width: '7px',
                  height: '7px',

                  borderRadius: '50%',

                  background: '#16C784',

                  boxShadow:
                    '0 0 0 4px rgba(22,199,132,.10)',
                }}
              />

              Growing digital trust ecosystem

            </div>

          </div>


          {/* =====================================
              ECOSYSTEM ITEMS
          ===================================== */}

          <div
            className="partner-logos"
            style={{
              position: 'relative',
              zIndex: 2,

              display: 'grid',

              gridTemplateColumns:
                'repeat(4, minmax(120px, 1fr))',

              gap: '10px',

              flex: 1,
            }}
          >

            {partners.map(
              (partner, index) => {

                const Icon =
                  partner.icon

                const isActive =
                  activePartner ===
                  partner.name


                return (

                  <div
                    key={partner.name}
                    className="partner-placeholder"
                    onMouseEnter={() =>
                      setActivePartner(
                        partner.name
                      )
                    }
                    onMouseLeave={() =>
                      setActivePartner(null)
                    }
                    style={{
                      position:
                        'relative',

                      minHeight:
                        '92px',

                      padding:
                        '13px 12px',

                      display:
                        'flex',

                      flexDirection:
                        'column',

                      alignItems:
                        'flex-start',

                      justifyContent:
                        'space-between',

                      gap: '8px',

                      border:
                        isActive
                          ? `1px solid ${partner.tone}33`
                          : '1px solid rgba(77,108,126,.14)',

                      borderRadius:
                        '13px',

                      background:
                        isActive
                          ? `${partner.tone}0D`
                          : 'rgba(255,255,255,.72)',

                      boxShadow:
                        isActive
                          ? `0 10px 25px ${partner.tone}18`
                          : '0 5px 16px rgba(21,56,77,.03)',

                      transform:
                        isActive
                          ? 'translateY(-4px) scale(1.015)'
                          : 'translateY(0) scale(1)',

                      transition:
                        'transform .22s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease',

                      cursor:
                        'default',
                    }}
                  >

                    {/* TOP */}

                    <div
                      style={{
                        width: '100%',

                        display:
                          'flex',

                        alignItems:
                          'center',

                        justifyContent:
                          'space-between',
                      }}
                    >

                      <div
                        style={{
                          display:
                            'flex',

                          alignItems:
                            'center',

                          gap: '8px',
                        }}
                      >

                        <div
                          style={{
                            width:
                              '27px',

                            height:
                              '27px',

                            display:
                              'flex',

                            alignItems:
                              'center',

                            justifyContent:
                              'center',

                            borderRadius:
                              '8px',

                            background:
                              `${partner.tone}12`,

                            color:
                              partner.tone,

                            transform:
                              isActive
                                ? 'rotate(-4deg) scale(1.08)'
                                : 'rotate(0deg) scale(1)',

                            transition:
                              'transform .22s ease',
                          }}
                        >

                          <Icon
                            size={14}
                          />

                        </div>


                        <span
                          style={{
                            fontSize:
                              '9px',

                            fontWeight:
                              800,

                            color:
                              '#6D7F90',

                            letterSpacing:
                              '.04em',
                          }}
                        >
                          {partner.short}
                        </span>

                      </div>


                      <ArrowUpRight
                        size={13}
                        style={{
                          color:
                            isActive
                              ? partner.tone
                              : '#AAB8C3',

                          transform:
                            isActive
                              ? 'translate(2px,-2px)'
                              : 'translate(0,0)',

                          transition:
                            'transform .22s ease, color .22s ease',
                        }}
                      />

                    </div>


                    {/* NAME */}

                    <div>

                      <strong
                        style={{
                          display:
                            'block',

                          color:
                            '#24394D',

                          fontSize:
                            '9px',

                          fontWeight:
                            800,

                          lineHeight:
                            1.25,
                        }}
                      >
                        {partner.name}
                      </strong>


                      <span
                        style={{
                          display:
                            'block',

                          marginTop:
                            '4px',

                          color:
                            '#8191A0',

                          fontSize:
                            '8px',

                          lineHeight:
                            1.3,
                        }}
                      >
                        {partner.description}
                      </span>

                    </div>


                    {/* ACTIVE INDICATOR */}

                    <span
                      style={{
                        position:
                          'absolute',

                        left: '12px',
                        bottom: '0',

                        width:
                          isActive
                            ? '34px'
                            : '16px',

                        height:
                          '2px',

                        borderRadius:
                          '999px',

                        background:
                          partner.tone,

                        opacity:
                          isActive
                            ? 1
                            : .32,

                        transition:
                          'width .22s ease, opacity .22s ease',
                      }}
                    />

                  </div>

                )
              }
            )}

          </div>

        </div>

      </div>

    </section>
  )
}


export default PartnerStrip