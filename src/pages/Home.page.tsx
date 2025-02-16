import { useState } from 'react';
import { Button, Flex, Select } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  const data = ['Mantine', 'Shadcn', 'Chakra'];
  const [selected, setSelected] = useState<string | null>('');

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Flex gap={10} mx={'auto'} justify={'center'} mt={10}>
        <Select
          data={data}
          value={selected}
          onChange={setSelected}
          placeholder="Please select a UI"
        />
        <Button onClick={() => setSelected('')}>Set to empty string</Button>
        <Button onClick={() => setSelected(null)}>Set to null</Button>
        <pre>{JSON.stringify(selected, undefined, 2)}</pre>
      </Flex>
    </>
  );
}
