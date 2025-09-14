import clsx from 'clsx'
import Link from 'next/link'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Chichester" invert={invert}>
          <Link href="tel:+441243302963">+44 (0)1243 302963</Link>

        </Office>
      </li>
      <li>
        <Office name="Portsmouth" invert={invert}>
          <Link href="tel:+442394381329">+44 (0)23 9438 1329</Link>
        </Office>
      </li>
    </ul>
  )
}
