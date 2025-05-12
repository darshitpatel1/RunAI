import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

// Pages
import Auth from "@/pages/auth";
import Dashboard from "@/pages/dashboard";
import Connectors from "@/pages/connectors";
import FlowBuilder from "@/pages/flow-builder";
import History from "@/pages/history";
import TablesPage from "@/pages/tables";
import TableDetailPage from "@/pages/tables/[id]";
import NewTablePage from "@/pages/tables/new";
import TableEditPage from "@/pages/tables/[id]/edit";
import AddRowPage from "@/pages/tables/[id]/add-row";
import EditRowPage from "@/pages/tables/[id]/edit-row/[rowId]";
import SettingsPage from "@/pages/settings";
import DocsPage from "@/pages/docs";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/auth" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/connectors" component={Connectors} />
      <Route path="/flow-builder/:id?" component={FlowBuilder} />
      <Route path="/history" component={History} />
      <Route path="/tables" component={TablesPage} />
      <Route path="/tables/new" component={NewTablePage} />
      <Route path="/tables/:id/add-row" component={AddRowPage} />
      <Route path="/tables/:id/edit-row/:rowId" component={EditRowPage} />
      <Route path="/tables/:id/edit" component={TableEditPage} />
      <Route path="/tables/:id" component={TableDetailPage} />
      <Route path="/docs" component={DocsPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
