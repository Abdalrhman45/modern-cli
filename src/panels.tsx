import React from "react";
import { Box, Text } from "ink";
import { events, modules, type NavId } from "./content.js";

const toneColor = {
  ok: "green",
  wait: "yellow",
  idle: "gray",
} as const;

function SectionTitle({ children }: { children: string }) {
  return (
    <Text bold color="white">
      {children}
    </Text>
  );
}

export function Panel({ id }: { id: NavId }) {
  if (id === "home") {
    return (
      <Box flexDirection="column" gap={1}>
        <SectionTitle>Welcome</SectionTitle>
        <Text color="gray">
          A full-screen starter for a desktop terminal app. The frame stays
          put. You replace the panels.
        </Text>
        <Box flexDirection="row" gap={2}>
          <Stat label="Views" value="5" />
          <Stat label="Runtime" value="Node" />
          <Stat label="UI" value="Ink" />
        </Box>
        <Text color="cyan">
          ↑↓ move   Enter open   1–5 jump   q quit
        </Text>
      </Box>
    );
  }

  if (id === "explore") {
    return (
      <Box flexDirection="column" gap={1}>
        <SectionTitle>Where to extend</SectionTitle>
        {modules.map((item) => (
          <Box key={item.name} flexDirection="column">
            <Text>
              <Text color="cyan">{item.name}</Text>
              <Text color="gray">  {item.file}</Text>
            </Text>
            <Text color="gray">{item.detail}</Text>
          </Box>
        ))}
      </Box>
    );
  }

  if (id === "activity") {
    return (
      <Box flexDirection="column" gap={1}>
        <SectionTitle>Activity</SectionTitle>
        {events.map((event) => (
          <Box key={event.time + event.label}>
            <Text color="gray">{event.time}  </Text>
            <Text color={toneColor[event.tone]}>●</Text>
            <Text> {event.label}</Text>
          </Box>
        ))}
      </Box>
    );
  }

  if (id === "settings") {
    return (
      <Box flexDirection="column" gap={1}>
        <SectionTitle>Settings</SectionTitle>
        <Setting name="Theme" value="Graphite" />
        <Setting name="Density" value="Comfortable" />
        <Setting name="Accent" value="Cyan" />
        <Text color="gray">
          These are display values. Wire them to a config file when you need
          persistence.
        </Text>
      </Box>
    );
  }

  return (
    <Box flexDirection="column" gap={1}>
      <SectionTitle>modern-cli</SectionTitle>
      <Text>TypeScript, Node, and Ink.</Text>
      <Text color="gray">
        Ink renders React to the terminal, so layout is components instead of
        ANSI strings.
      </Text>
      <Text color="gray">Run npm run dev while you edit. Build with npm run build.</Text>
    </Box>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Box
      flexDirection="column"
      borderStyle="round"
      borderColor="gray"
      paddingX={2}
      minWidth={16}
    >
      <Text color="gray">{label}</Text>
      <Text bold color="white">
        {value}
      </Text>
    </Box>
  );
}

function Setting({ name, value }: { name: string; value: string }) {
  return (
    <Box>
      <Box width={14}>
        <Text color="gray">{name}</Text>
      </Box>
      <Text color="cyan">{value}</Text>
    </Box>
  );
}
