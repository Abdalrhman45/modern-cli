import React, { useState } from "react";
import { Box, Text, useApp, useInput } from "ink";
import { navItems, type NavId } from "./content.js";
import { Panel } from "./panels.js";

const indexByKey: Record<string, number> = {
  "1": 0,
  "2": 1,
  "3": 2,
  "4": 3,
  "5": 4,
};

export function App() {
  const { exit } = useApp();
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState<NavId | null>(null);
  const current = navItems[index] ?? navItems[0];

  useInput((input, key) => {
    if (input === "q" || (key.ctrl && input === "c")) {
      exit();
      return;
    }

    if (key.escape && opened) {
      setOpened(null);
      return;
    }

    const jump = indexByKey[input];
    if (jump !== undefined) {
      setIndex(jump);
      setOpened(null);
      return;
    }

    if (key.upArrow) {
      setIndex((value) => (value === 0 ? navItems.length - 1 : value - 1));
      setOpened(null);
    }

    if (key.downArrow) {
      setIndex((value) => (value + 1) % navItems.length);
      setOpened(null);
    }

    if (key.return) {
      setOpened(current.id);
    }
  });

  return (
    <Box flexDirection="column" paddingX={1}>
      <Box marginBottom={1} justifyContent="space-between">
        <Text>
          <Text bold color="cyan">
            modern-cli
          </Text>
          <Text color="gray">  desktop terminal</Text>
        </Text>
        <Text color="gray">q quit</Text>
      </Box>

      <Box>
        <Box
          width={24}
          marginRight={2}
          flexDirection="column"
          borderStyle="round"
          borderColor="cyan"
          paddingX={1}
        >
          <Text bold color="gray">
            MENU
          </Text>
          {navItems.map((item, itemIndex) => {
            const active = itemIndex === index;
            return (
              <Text key={item.id} color={active ? "cyan" : "white"} bold={active}>
                {active ? "▸ " : "  "}
                {itemIndex + 1}  {item.label}
              </Text>
            );
          })}
        </Box>

        <Box
          flexGrow={1}
          flexDirection="column"
          borderStyle="round"
          borderColor="gray"
          paddingX={2}
          paddingY={1}
        >
          <Text color="gray">{current.kicker}</Text>
          <Box marginTop={1}>
            <Panel id={opened ?? current.id} />
          </Box>
          {opened ? (
            <Box marginTop={1}>
              <Text color="yellow">Opened. Esc returns to browsing.</Text>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
