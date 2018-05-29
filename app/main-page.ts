import "./bundle-config";

import MainViewModel from "./main-view-model";
import { Page } from "ui/page";
import { EventData } from "data/observable";

var model = new MainViewModel();

function pageLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext - model;
}

exports.pageLoaded = pageLoaded;