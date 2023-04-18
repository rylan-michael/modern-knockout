import * as ko from "knockout";
import { ApplicationsManagerViewModel } from "./applications-manager/applications-manager";
import ApplicationsManagerTemplate from "./applications-manager/applications-manager.html?raw";
import { ApplicationFormViewModel } from "./application-form/application-form";
import ApplicationFormTemplate from "./application-form/application-form.html?raw";

import "./style.css";

console.log("Hello world");

ko.components.register("application-form", {
    viewModel: ApplicationFormViewModel,
    template: ApplicationFormTemplate
});

ko.components.register("applications-manager", {
    viewModel: ApplicationsManagerViewModel,
    template: ApplicationsManagerTemplate
});

ko.applyBindings(new ApplicationsManagerViewModel());