import Navigation from "./components/Navigation";
import { ThemeProvider } from "@emotion/react";
import { themeOptions } from "./themeContext";
import useAuth, { AuthUser } from "./hooks/useAuth";
import useAppStore from "./store";
import { useEffect } from "react";

const App = () => {
  const [authUser] = useAuth();
  const { updateUser } = useAppStore();
  useEffect(() => {
    if (authUser) {
      updateUser(authUser as AuthUser);
    }
  }, [authUser, updateUser]);

  return (
    <ThemeProvider theme={themeOptions}>
      <div style={{ background: "url('../public/background.png')" }}>
        <Navigation />
      </div>
    </ThemeProvider>
  );
};

export default App;
/**
 * TODO: create first prototype Page
 *        - add loading skeletons
 *        - refactor components/logic into reusable parts/hooks
 * TODO: complete website styling/components
 *        -build components with working data/statemanagement
 */
