import {
    DefaultButton,
    IStackTokens,
    PrimaryButton,
    Stack,
  } from "office-ui-fabric-react";
  import * as React from "react";
  import ModalTaskPop from "./ModalTaskPop";
  import useModal from "./useModal";
  
  
 
  
  // Example formatting
  const stackTokens: IStackTokens = { childrenGap: 40 };
  
  export const TaskButton: React.FunctionComponent = () => {
   
    const {isShowing,  toggle } = useModal();
    return (
      <div>
        <Stack horizontal tokens={stackTokens}>
          <DefaultButton text="Cancel"  onClick={toggle} 
            />
          <PrimaryButton
            text="Save"
            
           
            onClick={toggle}
          />
        </Stack>
            
          <ModalTaskPop
          isShowing={isShowing}
          hide={toggle}
        />
         
      
      </div>
  
    );
  };
  
  export default TaskButton;