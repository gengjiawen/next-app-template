'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const setColor = function (color: string) {
    setColorScheme(color);
    notifications.show({ message: color, position: 'top-left' });
  };

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColor('light')}>Light</Button>
      <Button onClick={() => setColor('dark')}>Dark</Button>
      <Button onClick={() => setColor('auto')}>Auto</Button>
    </Group>
  );
}
