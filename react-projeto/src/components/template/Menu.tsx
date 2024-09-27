import {
  IconForms,
  IconHome2,
  IconNumber1,
  IconNumbers,
} from '@tabler/icons-react';
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <>
      <aside className="w-80 bg-zinc-800 p-6">
        <nav className="flex flex-col gap-2">
          <MenuItem texto="Inicio" href="/" icone={<IconHome2 />} />
          <MenuItem
            texto="Primeiro componente"
            href="/primeiro"
            icone={<IconNumber1 />}
          />
          <MenuItem
            texto="Componente com estado"
            href="/contador"
            icone={<IconNumbers />}
          />
          <MenuItem
            texto="Exemplo de formulario"
            href="/formulario"
            icone={<IconForms />}
          />
          {/* <Link href="/">Inicio</Link> */}
          {/* <Link href="/primeiro">Primeiro Componente</Link>
          <Link href="/contador">Componente com estado</Link>
          <Link href="/formulario">Exemplo de formulario</Link> */}
        </nav>
      </aside>
    </>
  );
}
