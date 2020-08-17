import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { Panel } from "office-ui-fabric-react/lib/Panel";
import { useConstCallback } from "@uifabric/react-hooks";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { SwatchColorPicker } from "office-ui-fabric-react/lib/SwatchColorPicker";
import { useState } from "react";



initializeIcons(/* optional base url */);
export const Settings: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openPanel = useConstCallback(() => setIsOpen(true));
  const dismissPanel = useConstCallback(() => setIsOpen(false));

  return (
    <div>
      <Icon
        iconName="settings"
        onClick={openPanel}
        style={{
          height: 200,
          width: 100,
          color: "white",
          float: "right",
          marginRight: -330,
          marginTop: -22,
        }}
      />

      <Panel
        headerText="Settings"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
      >
        <SwatchColorPickerBasicExample />
      </Panel>
    </div>
  );
};

const colorCellsExample2 = [
  { id: "a", label: "red", color: "#a4262c" },
  { id: "b", label: "orange", color: "#ca5010" },
  { id: "c", label: "orangeYellow", color: "#986f0b" },
  { id: "d", label: "yellowGreen", color: "#8cbd18" },
  { id: "e", label: "green", color: "#0b6a0b" },
  { id: "f", label: "cyan", color: "#038387" },
  { id: "g", label: "cyanBlue", color: "#004e8c" },
  { id: "h", label: "magenta", color: "#881798" },
  { id: "i", label: "magentaPink", color: "#9b0062" },
  { id: "j", label: "black", color: "#000000" },
  { id: "k", label: "gray", color: "#7a7574" },
  { id: "l", label: "gray20", color: "#69797e" },
];

export const SwatchColorPickerBasicExample: React.FunctionComponent = () => {
    const [previewColor, setPreviewColor] = React.useState<string>();
  
    const swatchColorPickerOnCellHovered = (id: string, color: string) => {
      setPreviewColor(color!);
    };

  return (
    <div>
      <div
        style={{
          color: previewColor,
          fontSize: "24px",
        }}
      >
          Theme
      
      </div>
      <SwatchColorPicker
        //onCellHovered={ swatchColorPickerOnCellHovered}
        //onCellFocused={ swatchColorPickerOnCellHovered}
        columnCount={4}
        cellShape={"square"}
        cellHeight={60}
        cellWidth={60}
        cellBorderWidth={3}
        colorCells={colorCellsExample2}
        
      />
      
    </div>
  );
};



export default Settings;
