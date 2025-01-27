import Link from 'next/link'
import { Menu } from 'lucide-react'

import { AppHeader } from '@/payload-types'
import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  TButtonVariant,
} from '@/ui'
import { getCachedGlobal } from '@/utils'

const navLinksDefault = [
  {
    disabled: false,
    isExternal: false,
    label: 'Clínicas',
    href: 'https://clinicasorigen.es/nuestras-clinicas/',
    appearance: 'single',
    id: 'menu-item-7628',
  },
  {
    disabled: false,
    isExternal: false,
    label: 'Especialidades',
    href: 'https://clinicasorigen.es/especialidades/',
    appearance: 'dropdown',
    id: 'menu-item-9432',
    childrens: [
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Depresión',
        childHref: 'https://clinicasorigen.es/especialidades/la-depresion/',
        id: 'menu-item-9117',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'La obesidad',
        childHref: 'https://clinicasorigen.es/especialidades/obesidad/',
        id: 'menu-item-9433',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Ansiedad',
        childHref: 'https://clinicasorigen.es/especialidades/la-ansiedad/',
        id: 'menu-item-9590',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Emociones y Regulación Emocional',
        childHref: 'https://clinicasorigen.es/emociones-y-regulacion-emocional/',
        id: 'menu-item-13962',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Fertilidad',
        childHref: 'https://clinicasorigen.es/fertilidad-que-es-y-tratamientos-para-combatir-los-problemas-de-fertilidad/',
        id: 'menu-item-13963',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Psiquiatría',
        childHref: 'https://clinicasorigen.es/psiquiatria/',
        id: 'menu-item-13964',
      },
    ],
  },
  {
    disabled: false,
    isExternal: false,
    label: 'Equipo',
    appearance: 'dropdown',
    id: 'menu-item-7258',
    childrens: [
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Especialistas',
        childHref: 'https://clinicasorigen.es/psicologos-y-psiquiatras-clinicas-origen/',
        id: 'menu-item-7784',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Quienes sómos',
        childHref: 'https://clinicasorigen.es/quienes-somos-y-que-ofrecemos/',
        id: 'menu-item-7257',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Nuestros principios',
        childHref: 'https://clinicasorigen.es/principios-origen/',
        id: 'menu-item-7173',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Sistema de mejora',
        childHref: 'https://clinicasorigen.es/sistema-integral-de-mejora/',
        id: 'menu-item-7172',
      },
    ],
  },
  {
    disabled: false,
    isExternal: false,
    label: 'Tratamientos',
    href: 'https://clinicasorigen.es/terapias-y-tratamientos/',
    appearance: 'dropdown',
    id: 'menu-item-7174',
    childrens: [
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Tratamiento psicológico breve',
        childHref: 'https://clinicasorigen.es/tratamiento-psicologico-breve/',
        id: 'menu-item-7248',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Plan de bienestar. Tarifa plana',
        childHref: 'https://clinicasorigen.es/plan-de-bienestar-tarifa-plana/',
        id: 'menu-item-7249',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Depresión',
        childHref: 'https://clinicasorigen.es/depresion/',
        id: 'menu-item-7178',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Ansiedad',
        childHref: 'https://clinicasorigen.es/ansiedad/',
        id: 'menu-item-7177',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento intradisciplinar para la agorafobia cognitivo-conductual',
            childHref: 'https://clinicasorigen.es/ansiedad/agorafobia/',
            id: 'menu-item-7195',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para el Trastorno de Ansiedad Generalizada',
            childHref: 'https://clinicasorigen.es/ansiedad/ansiedad/',
            id: 'menu-item-7197',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para el trastorno de pánico',
            childHref: 'https://clinicasorigen.es/ansiedad/trastorno-de-panico/',
            id: 'menu-item-7196',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para el afrontamiento de una enfermedad',
            childHref: 'https://clinicasorigen.es/ansiedad/ansiedad-por-enfermedad/',
            id: 'menu-item-7235',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Mejora y desarrollo personal y coaching',
        childHref: 'https://clinicasorigen.es/mejora-personal-y-coaching/',
        id: 'menu-item-7182',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Escuela de padres adolescencia',
        childHref: 'https://clinicasorigen.es/escuela-de-padres-adolescencia/',
        id: 'menu-item-7250',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Programa CRECE',
        childHref: 'https://clinicasorigen.es/programa-crece/',
        id: 'menu-item-7254',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Escuela de padres Infancia',
        childHref: 'https://clinicasorigen.es/escuela-de-padres-infancia/',
        id: 'menu-item-7251',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Relación de pareja',
        childHref: 'https://clinicasorigen.es/dificultades-de-relacion-y-pareja/',
        id: 'menu-item-7190',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Hábitos negativos',
        childHref: 'https://clinicasorigen.es/adicciones/',
        id: 'menu-item-7191',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para hábitos sin sustancias',
            childHref: 'https://clinicasorigen.es/adicciones/adicciones-no-toxicas/',
            id: 'menu-item-7236',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Trastorno por consumo',
            childHref: 'https://clinicasorigen.es/adicciones/trastorno-por-consumo/',
            id: 'menu-item-7221',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento para el Trastorno por consumo de tabaco',
            childHref: 'https://clinicasorigen.es/adicciones/trastorno-consumo-tabaco/',
            id: 'menu-item-7220',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Apoyo psicológico para la fertilidad',
        childHref: 'https://clinicasorigen.es/programa-incrementa/',
        id: 'menu-item-7246',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Divorcio',
        childHref: 'https://clinicasorigen.es/divorcio/',
        id: 'menu-item-7188',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Duelo',
        childHref: 'https://clinicasorigen.es/duelo/',
        id: 'menu-item-7189',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Enfado – Control de impulsos',
        childHref: 'https://clinicasorigen.es/enfado-control-de-impulsos/',
        id: 'menu-item-7192',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para la regulación del enfado',
            childHref: 'https://clinicasorigen.es/enfado-control-de-impulsos/enfado/',
            id: 'menu-item-7223',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para el control de impulsos. Cleptomanía',
            childHref: 'https://clinicasorigen.es/enfado-control-de-impulsos/cleptomania/',
            id: 'menu-item-7222',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Fobias',
        childHref: 'https://clinicasorigen.es/fobias-5/',
        id: 'menu-item-7237',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para la Ansiedad Fobia Social',
            childHref: 'https://clinicasorigen.es/fobias-5/fobia-social/',
            id: 'menu-item-7238',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Fobia específica',
            childHref: 'https://clinicasorigen.es/fobias-5/fobia-especifica/',
            id: 'menu-item-7239',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para la fobia a la sangre y/o inyecciones',
            childHref: 'https://clinicasorigen.es/fobias-5/fobia-a-la-sangre/',
            id: 'menu-item-7240',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Hipocondría. Cognitivo-conductual',
        childHref: 'https://clinicasorigen.es/hipocondria/',
        id: 'menu-item-7208',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Insomnio. Terapia cognitivo-conductual',
        childHref: 'https://clinicasorigen.es/insomnio/',
        id: 'menu-item-7212',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Obsesivo compulsivo',
        childHref: 'https://clinicasorigen.es/obsesivo-compulsivo/',
        id: 'menu-item-7176',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para el Trastorno Obsesivo Compulsivo',
            childHref: 'https://clinicasorigen.es/obsesivo-compulsivo/trastorno-obsesivo-compulsivo/',
            id: 'menu-item-7203',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para el Trastorno Dismórfico Corporal',
            childHref: 'https://clinicasorigen.es/obsesivo-compulsivo/trastorno-dismorfico-corporal-autoimagen/',
            id: 'menu-item-7202',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Trastorno de acumulación',
            childHref: 'https://clinicasorigen.es/obsesivo-compulsivo/trastorno-de-acumulacion/',
            id: 'menu-item-7201',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tricotilomanía',
            childHref: 'https://clinicasorigen.es/obsesivo-compulsivo/tricotilomania-trastrono-control-impulsivo/',
            id: 'menu-item-7200',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Excoriación (Daños en la piel)',
            childHref: 'https://clinicasorigen.es/obsesivo-compulsivo/excoriacion-danos-en-la-piel/',
            id: 'menu-item-7199',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Onicofagia (Morderse las uñas)',
            childHref: 'https://clinicasorigen.es/obsesivo-compulsivo/onicofagia-morderse-las-unas/',
            id: 'menu-item-7198',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Parafilias',
        childHref: 'https://clinicasorigen.es/parafilias-5/',
        id: 'menu-item-7183',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para el trastorno de exhibicionismo',
            childHref: 'https://clinicasorigen.es/parafilias-5/trastorno-de-exhibicionismo/',
            id: 'menu-item-7234',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para la regulación sexual. Frotteurismo',
            childHref: 'https://clinicasorigen.es/parafilias-5/trastorno-de-frotteurismo/',
            id: 'menu-item-7244',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Tratamiento psicológico para el Fetichismo. Cognitivo conductual',
            childHref: 'https://clinicasorigen.es/parafilias-5/trastorno-de-fetichismo/',
            id: 'menu-item-7233',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Terapia psicológica para el transtorno de masoquismo sexual',
            childHref: 'https://clinicasorigen.es/parafilias-5/transtorno-masoquismo-sexual/',
            id: 'menu-item-7243',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Terapia psicológica para el trastorno de Sadismo Sexual',
            childHref: 'https://clinicasorigen.es/parafilias-5/trastorno-sadismo-sexual/',
            id: 'menu-item-7242',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Terapia psicológica para el trastorno de voyeurismo',
            childHref: 'https://clinicasorigen.es/parafilias-5/trastorno-de-voyeurismo/',
            id: 'menu-item-7241',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Personalidad límite',
        childHref: 'https://clinicasorigen.es/personalidad-limite/',
        id: 'menu-item-7185',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Problemas de alimentación',
        childHref: 'https://clinicasorigen.es/problemas-de-alimentacion/',
        id: 'menu-item-7194',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Obesidad',
            childHref: 'https://clinicasorigen.es/problemas-de-alimentacion/obesidad/',
            id: 'menu-item-7207',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Bulimia',
            childHref: 'https://clinicasorigen.es/problemas-de-alimentacion/bulimia/',
            id: 'menu-item-7206',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Terapia psicológica intradisciplinar para el trastorno por atracón',
            childHref: 'https://clinicasorigen.es/problemas-de-alimentacion/atracon/',
            id: 'menu-item-7205',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Problemas familiares',
        childHref: 'https://clinicasorigen.es/?page_id=377',
        id: 'menu-item-7186',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Problemas laborales',
        childHref: 'https://clinicasorigen.es/problemas-laborales/',
        id: 'menu-item-7187',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Sexualidad femenina',
        childHref: 'https://clinicasorigen.es/sexualidad-femenina/',
        id: 'menu-item-7193',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Trastorno orgásmico femenino',
            childHref: 'https://clinicasorigen.es/sexualidad-femenina/trastorno-orgasmico-femenino/',
            id: 'menu-item-7219',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Dificultades en la excitación',
            childHref: 'https://clinicasorigen.es/sexualidad-femenina/dificultades-en-la-excitacion/',
            id: 'menu-item-7217',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Dolor durante la penetración',
            childHref: 'https://clinicasorigen.es/sexualidad-femenina/dolor-durante-la-penetracion/',
            id: 'menu-item-7218',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Sexualidad masculina',
        childHref: 'https://clinicasorigen.es/sexualidad-masculina/',
        id: 'menu-item-7211',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Eyaculación retardada',
            childHref: 'https://clinicasorigen.es/sexualidad-masculina/eyaculacion-retardada/',
            id: 'menu-item-7216',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Trastorno eréctil',
            childHref: 'https://clinicasorigen.es/sexualidad-masculina/trastorno-erectil/',
            id: 'menu-item-7215',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Falta de deseo sexual',
            childHref: 'https://clinicasorigen.es/sexualidad-masculina/falta-deseo-sexual/',
            id: 'menu-item-7214',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Eyaculación prematura',
            childHref: 'https://clinicasorigen.es/sexualidad-masculina/eyaculacion-prematura/',
            id: 'menu-item-7213',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Terapias Online',
        childHref: 'https://clinicasorigen.es/terapias-online-3/',
        id: 'menu-item-7247',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Trastorno bipolar',
        childHref: 'https://clinicasorigen.es/trastorno-bipolar/',
        id: 'menu-item-7204',
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Traumas y estrés',
        childHref: 'https://clinicasorigen.es/traumas-y-estres/',
        id: 'menu-item-7175',
        childrens: [
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Trastorno por estrés agudo',
            childHref: 'https://clinicasorigen.es/traumas-y-estres/trastorno-estres-agudo/',
            id: 'menu-item-7210',
          },
          {
            childDisabled: false,
            isExternal: false,
            childLabel: 'Trastorno de estrés postraumático',
            childHref: 'https://clinicasorigen.es/traumas-y-estres/trastorno-estres-postraumatico/',
            id: 'menu-item-7209',
          },
        ],
      },
      {
        childDisabled: false,
        isExternal: false,
        childLabel: 'Garantía de éxito en tus resultados',
        childHref: 'https://clinicasorigen.es/garantia-de-exito-en-tus-resultados/',
        id: 'menu-item-9957',
      },
    ],
  },
  {
    disabled: false,
    isExternal: false,
    label: 'Artículos',
    href: 'https://clinicasorigen.es/articulos-psicologia/',
    id: 'menu-item-15434',
  },
  {
    disabled: false,
    isExternal: false,
    label: 'Tests',
    href: 'https://clinicasorigen.es/test/',
    id: 'menu-item-8823',
  },
  {
    disabled: false,
    isExternal: true,
    label: 'Origen Corporate',
    href: 'https://origencorporate.es/',
    id: 'menu-item-18169',
  },
]

export const Header = async () => {
  const appHeader: AppHeader = await getCachedGlobal('app-header', 1)()

  // const navLinks = appHeader?.navLinks || []
  const navLinks = navLinksDefault
  const navActions = appHeader?.navActions || []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logo: any = appHeader?.logo || null

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4 p-3">
        <div className="flex items-center gap-4">
          <div className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground rounded-full p-2 shadow-xl lg:hidden">
            <Menu className="size-6" />
          </div>
          {logo && (
            <img
              className="h-12"
              // src={logo?.url}
              src="https://clinicasorigen.es/wp-content/uploads/2023/03/cropped-cropped-cropped-logo-1-1-1.png"
              alt={logo?.alt}
            />
          )}
        </div>
        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map(item => {
            if (item.appearance === 'dropdown') {
              return (
                <NavigationMenu
                  key={item.id}
                  className="px-0"
                >
                  <NavigationMenuList className="px-0 rounded-none">
                    <NavigationMenuItem className="px-0">
                      <NavigationMenuTrigger className="p-0 text-sm font-normal">{item.label}</NavigationMenuTrigger>
                      <NavigationMenuContent className="flex flex-col">
                        {item?.childrens?.map(({ childDisabled, isExternal, childLabel, childHref, id }) => (
                          <NavigationMenuLink
                            key={id}
                            // href={childHref || (typeof childPage === 'object' ? childPage?.slug : '') || ''}
                            href={childHref}
                            className={`text-sm text-nowrap px-3 py-1.5 hover:bg-primary hover:text-primary-foreground ${childDisabled ? 'pointer-events-none opacity-50' : ''}`}
                            target={isExternal ? '_blank' : undefined}
                          >
                            {childLabel}
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              )
              // return (
              //   <div
              //     key={item.id}
              //     className="group relative"
              //   >
              //     <div className="flex items-center">
              //       <div className="text-sm leading-none">{item.label}</div>
              //       <ChevronDownIcon className="size-4 mt-1" />
              //     </div>
              //     <div className="hidden group-active:flex group-hover:flex absolute top-6 left-0 bg-card border border-gray-200 rounded-md w-fit p-3 flex-col gap-2">
              //       {item?.childrens?.map(({ childDisabled, isExternal, childLabel, childHref, childPage, id }) => (
              //         <Link
              //           key={id}
              //           href={childHref || (typeof childPage === 'object' ? childPage?.slug : '') || ''}
              //           className={`text-sm text-nowrap hover:underline ${childDisabled ? 'pointer-events-none opacity-50' : ''}`}
              //           target={isExternal ? '_blank' : undefined}
              //         >
              //           {childLabel}
              //         </Link>
              //       ))}
              //     </div>
              //   </div>
              // )
            }
            // if (item.appearance === 'single') {
            return (
              <Link
                className="text-sm cursor-pointer hover:underline"
                key={item.id}
                href={item.label || ''}
              >
                {item.label}
              </Link>
            )
            // }
          })}
        </nav>
        <div className="flex items-center gap-2">
          {navActions.map(action => (
            <Button
              key={action.label}
              size="sm"
              variant={action.variant as TButtonVariant}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  )
}
