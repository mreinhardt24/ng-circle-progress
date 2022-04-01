import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CircleProgressOptions {
    constructor() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = 0;
        this.imageWidth = 0;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
    }
}
export class CircleProgressComponent {
    constructor(defaultOptions, ngZone, elRef, injector) {
        this.ngZone = ngZone;
        this.elRef = elRef;
        this.onClick = new EventEmitter();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new EventEmitter();
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = () => {
            this.applyOptions();
            if (this.options.lazy) {
                // Draw svg if it doesn't exist
                this.svgElement === null && this.draw(this._lastPercent);
                // Draw it only when it's in the viewport
                if (this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (this.options.animation && this.options.animationDuration > 0) {
                        this.animate(this._lastPercent, this.options.percent);
                    }
                    else {
                        this.draw(this.options.percent);
                    }
                    this._lastPercent = this.options.percent;
                }
            }
            else {
                if (this.options.animation && this.options.animationDuration > 0) {
                    this.animate(this._lastPercent, this.options.percent);
                }
                else {
                    this.draw(this.options.percent);
                }
                this._lastPercent = this.options.percent;
            }
        };
        this.polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
            let angleInRadius = angleInDegrees * Math.PI / 180;
            let x = centerX + Math.sin(angleInRadius) * radius;
            let y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = (percent) => {
            // make percent reasonable
            percent = (percent === undefined) ? this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            let circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
            if (this.options.showBackground) {
                boxSize += (this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            let centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            let startPoint = { x: centre.x, y: centre.y - this.options.radius };
            // get the end point of the arc
            let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            let largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
            }
            else {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
            }
            // percent may not equal the actual percent
            let titlePercent = this.options.animateTitle ? percent : this.options.percent;
            let titleTextPercent = titlePercent > this.options.maxPercent ?
                `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
            let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
            // get title object
            let title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.titleColor,
                fontSize: this.options.titleFontSize,
                fontWeight: this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (this.options.titleFormat !== undefined && this.options.titleFormat.constructor.name === 'Function') {
                let formatted = this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = [...formatted];
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (this.options.title instanceof Array) {
                        title.texts = [...this.options.title];
                    }
                    else {
                        title.texts.push(this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            let subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.subtitleColor,
                fontSize: this.options.subtitleFontSize,
                fontWeight: this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (this.options.subtitleFormat !== undefined && this.options.subtitleFormat.constructor.name === 'Function') {
                let formatted = this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = [...formatted];
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.subtitle instanceof Array) {
                    subtitle.texts = [...this.options.subtitle];
                }
                else {
                    subtitle.texts.push(this.options.subtitle.toString());
                }
            }
            // get units object
            let units = {
                text: `${this.options.units}`,
                fontSize: this.options.unitsFontSize,
                fontWeight: this.options.unitsFontWeight,
                color: this.options.unitsColor
            };
            // get total count of text lines to be shown
            let rowCount = 0, rowNum = 1;
            this.options.showTitle && (rowCount += title.texts.length);
            this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (this.options.showTitle) {
                for (let span of title.texts) {
                    title.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (this.options.showSubtitle) {
                for (let span of subtitle.texts) {
                    subtitle.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // create ID for gradient element
            if (null === this._gradientUUID) {
                this._gradientUUID = this.uuid();
            }
            // Bring it all together
            this.svg = {
                viewBox: `0 0 ${boxSize} ${boxSize}`,
                // Set both width and height to '100%' if it's responsive
                width: this.options.responsive ? '100%' : boxSize,
                height: this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
                    fill: this.options.backgroundColor,
                    fillOpacity: this.options.backgroundOpacity,
                    stroke: this.options.backgroundStroke,
                    strokeWidth: this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: `M ${startPoint.x} ${startPoint.y}
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
                    stroke: this.options.outerStrokeColor,
                    strokeWidth: this.options.outerStrokeWidth,
                    strokeLinecap: this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: this.options.innerStrokeColor,
                    strokeWidth: this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - this.options.imageWidth / 2,
                    y: centre.y - this.options.imageHeight / 2,
                    src: this.options.imageSrc,
                    width: this.options.imageWidth,
                    height: this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + this._gradientUUID,
                    colorStop1: this.options.outerStrokeColor,
                    colorStop2: this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + this._gradientUUID,
                    colorStop1: this.options.backgroundColor,
                    colorStop2: this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = (previousPercent, currentPercent) => {
            const MIN_INTERVAL = 10;
            let times, step, interval;
            let fromPercent = this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            let toPercent = currentPercent < 0 ? 0 : this.min(currentPercent, this.options.maxPercent);
            let delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!this.options.animateTitle && !this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = this.options.animationDuration / interval;
                if (!this.options.animateTitle && !this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = (previousPercent, currentPercent) => {
            if (this._timerSubscription && !this._timerSubscription.closed) {
                this._timerSubscription.unsubscribe();
            }
            let fromPercent = this.options.startFromZero ? 0 : previousPercent;
            let toPercent = currentPercent;
            let { step: step, interval: interval } = this.getAnimationParameters(fromPercent, toPercent);
            let count = fromPercent;
            if (fromPercent < toPercent) {
                this._timerSubscription = timer(0, interval).subscribe(() => {
                    count += step;
                    if (count <= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                this._timerSubscription = timer(0, interval).subscribe(() => {
                    count -= step;
                    if (count >= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && toPercent >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.applyOptions = () => {
            // the options of <circle-progress> may change already
            for (let name of Object.keys(this.options)) {
                if (this.hasOwnProperty(name) && this[name] !== undefined) {
                    this.options[name] = this[name];
                }
                else if (this.templateOptions && this.templateOptions[name] !== undefined) {
                    this.options[name] = this.templateOptions[name];
                }
            }
            // make sure key options valid
            this.options.radius = Math.abs(+this.options.radius);
            this.options.space = +this.options.space;
            this.options.percent = +this.options.percent > 0 ? +this.options.percent : 0;
            this.options.maxPercent = Math.abs(+this.options.maxPercent);
            this.options.animationDuration = Math.abs(this.options.animationDuration);
            this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
            this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
            this.options.backgroundPadding = +this.options.backgroundPadding;
        };
        this.getRelativeY = (rowNum, rowCount) => {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            let initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = (a, b) => {
            return a < b ? a : b;
        };
        this.max = (a, b) => {
            return a > b ? a : b;
        };
        this.uuid = () => {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.checkViewport = () => {
            this.findSvgElement();
            let previousValue = this.isInViewport;
            this.isInViewport = this.isElementInViewport(this.svgElement);
            if (previousValue !== this.isInViewport && this.onViewportChanged.observers.length > 0) {
                this.ngZone.run(() => {
                    this.onViewportChanged.emit({ oldValue: previousValue, newValue: this.isInViewport });
                });
            }
        };
        this.onScroll = (event) => {
            this.checkViewport();
        };
        this.loadEventsForLazyMode = () => {
            if (this.options.lazy) {
                this.ngZone.runOutsideAngular(() => {
                    this.document.addEventListener('scroll', this.onScroll, true);
                    this.window.addEventListener('resize', this.onScroll, true);
                });
                if (this._viewportChangedSubscriber === null) {
                    this._viewportChangedSubscriber = this.onViewportChanged.subscribe(({ oldValue, newValue }) => {
                        newValue ? this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                let _timer = timer(0, 50).subscribe(() => {
                    this.svgElement === null ? this.checkViewport() : _timer.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = () => {
            // Remove event listeners
            this.document.removeEventListener('scroll', this.onScroll, true);
            this.window.removeEventListener('resize', this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (this._viewportChangedSubscriber !== null) {
                this._viewportChangedSubscriber.unsubscribe();
                this._viewportChangedSubscriber = null;
            }
        };
        this.document = injector.get(DOCUMENT);
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    emitClickEvent(event) {
        if (this.options.renderOnClick) {
            this.animate(0, this.options.percent);
        }
        if (this.onClick.observers.length > 0) {
            this.onClick.emit(event);
        }
    }
    isDrawing() {
        return (this._timerSubscription && !this._timerSubscription.closed);
    }
    findSvgElement() {
        if (this.svgElement === null) {
            let tags = this.elRef.nativeElement.getElementsByTagName('svg');
            if (tags.length > 0) {
                this.svgElement = tags[0];
            }
        }
    }
    isElementInViewport(el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        let rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    }
    ngOnInit() {
        this.loadEventsForLazyMode();
    }
    ngOnDestroy() {
        this.unloadEventsForLazyMode();
    }
    ngOnChanges(changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    }
}
CircleProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CircleProgressComponent, deps: [{ token: CircleProgressOptions }, { token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
CircleProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: CircleProgressComponent, selector: "circle-progress", inputs: { name: "name", class: "class", backgroundGradient: "backgroundGradient", backgroundColor: "backgroundColor", backgroundGradientStopColor: "backgroundGradientStopColor", backgroundOpacity: "backgroundOpacity", backgroundStroke: "backgroundStroke", backgroundStrokeWidth: "backgroundStrokeWidth", backgroundPadding: "backgroundPadding", radius: "radius", space: "space", percent: "percent", toFixed: "toFixed", maxPercent: "maxPercent", renderOnClick: "renderOnClick", units: "units", unitsFontSize: "unitsFontSize", unitsFontWeight: "unitsFontWeight", unitsColor: "unitsColor", outerStrokeGradient: "outerStrokeGradient", outerStrokeWidth: "outerStrokeWidth", outerStrokeColor: "outerStrokeColor", outerStrokeGradientStopColor: "outerStrokeGradientStopColor", outerStrokeLinecap: "outerStrokeLinecap", innerStrokeColor: "innerStrokeColor", innerStrokeWidth: "innerStrokeWidth", titleFormat: "titleFormat", title: "title", titleColor: "titleColor", titleFontSize: "titleFontSize", titleFontWeight: "titleFontWeight", subtitleFormat: "subtitleFormat", subtitle: "subtitle", subtitleColor: "subtitleColor", subtitleFontSize: "subtitleFontSize", subtitleFontWeight: "subtitleFontWeight", imageSrc: "imageSrc", imageHeight: "imageHeight", imageWidth: "imageWidth", animation: "animation", animateTitle: "animateTitle", animateSubtitle: "animateSubtitle", animationDuration: "animationDuration", showTitle: "showTitle", showSubtitle: "showSubtitle", showUnits: "showUnits", showImage: "showImage", showBackground: "showBackground", showInnerStroke: "showInnerStroke", clockwise: "clockwise", responsive: "responsive", startFromZero: "startFromZero", showZeroOuterStroke: "showZeroOuterStroke", lazy: "lazy", templateOptions: ["options", "templateOptions"] }, outputs: { onClick: "onClick" }, usesOnChanges: true, ngImport: i0, template: `
        <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg"
             [attr.viewBox]="svg.viewBox" preserveAspectRatio="xMidYMid meet"
             [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
            <defs>
                <linearGradient *ngIf="options.outerStrokeGradient" [attr.id]="svg.outerLinearGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.outerLinearGradient.colorStop1"  [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.outerLinearGradient.colorStop2" [attr.stop-opacity]="1"/>
                </linearGradient>
                <radialGradient *ngIf="options.backgroundGradient" [attr.id]="svg.radialGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.radialGradient.colorStop1" [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.radialGradient.colorStop2" [attr.stop-opacity]="1"/>
                </radialGradient>
            </defs>
            <ng-container *ngIf="options.showBackground">
                <circle *ngIf="!options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        [attr.fill]="svg.backgroundCircle.fill"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
                <circle *ngIf="options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        attr.fill="url({{window.location.href}}#{{svg.radialGradient.id}})"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
            </ng-container>            
            <circle *ngIf="options.showInnerStroke"
                    [attr.cx]="svg.circle.cx"
                    [attr.cy]="svg.circle.cy"
                    [attr.r]="svg.circle.r"
                    [attr.fill]="svg.circle.fill"
                    [attr.stroke]="svg.circle.stroke"
                    [attr.stroke-width]="svg.circle.strokeWidth"/>
            <ng-container *ngIf="+options.percent!==0 || options.showZeroOuterStroke">
                <path *ngIf="!options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        [attr.stroke]="svg.path.stroke"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
                <path *ngIf="options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        attr.stroke="url({{window.location.href}}#{{svg.outerLinearGradient.id}})"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
            </ng-container>
            <text *ngIf="!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)"
                  alignment-baseline="baseline"
                  [attr.x]="svg.circle.cx"
                  [attr.y]="svg.circle.cy"
                  [attr.text-anchor]="svg.title.textAnchor">
                <ng-container *ngIf="options.showTitle">
                    <tspan *ngFor="let tspan of svg.title.tspans"
                           [attr.x]="svg.title.x"
                           [attr.y]="svg.title.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.title.fontSize"
                           [attr.font-weight]="svg.title.fontWeight"
                           [attr.fill]="svg.title.color">{{tspan.span}}</tspan>
                </ng-container>
                <tspan *ngIf="options.showUnits"
                       [attr.font-size]="svg.units.fontSize"
                       [attr.font-weight]="svg.units.fontWeight"
                       [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
                <ng-container *ngIf="options.showSubtitle">
                    <tspan *ngFor="let tspan of svg.subtitle.tspans"
                           [attr.x]="svg.subtitle.x"
                           [attr.y]="svg.subtitle.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.subtitle.fontSize"
                           [attr.font-weight]="svg.subtitle.fontWeight"
                           [attr.fill]="svg.subtitle.color">{{tspan.span}}</tspan>
                </ng-container>
            </text>
            <image *ngIf="options.showImage" preserveAspectRatio="none" 
                [attr.height]="svg.image.height"
                [attr.width]="svg.image.width"
                [attr.xlink:href]="svg.image.src"
                [attr.x]="svg.image.x"
                [attr.y]="svg.image.y"
            />
        </svg>
    `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CircleProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'circle-progress',
                    template: `
        <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg"
             [attr.viewBox]="svg.viewBox" preserveAspectRatio="xMidYMid meet"
             [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
            <defs>
                <linearGradient *ngIf="options.outerStrokeGradient" [attr.id]="svg.outerLinearGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.outerLinearGradient.colorStop1"  [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.outerLinearGradient.colorStop2" [attr.stop-opacity]="1"/>
                </linearGradient>
                <radialGradient *ngIf="options.backgroundGradient" [attr.id]="svg.radialGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.radialGradient.colorStop1" [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.radialGradient.colorStop2" [attr.stop-opacity]="1"/>
                </radialGradient>
            </defs>
            <ng-container *ngIf="options.showBackground">
                <circle *ngIf="!options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        [attr.fill]="svg.backgroundCircle.fill"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
                <circle *ngIf="options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        attr.fill="url({{window.location.href}}#{{svg.radialGradient.id}})"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
            </ng-container>            
            <circle *ngIf="options.showInnerStroke"
                    [attr.cx]="svg.circle.cx"
                    [attr.cy]="svg.circle.cy"
                    [attr.r]="svg.circle.r"
                    [attr.fill]="svg.circle.fill"
                    [attr.stroke]="svg.circle.stroke"
                    [attr.stroke-width]="svg.circle.strokeWidth"/>
            <ng-container *ngIf="+options.percent!==0 || options.showZeroOuterStroke">
                <path *ngIf="!options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        [attr.stroke]="svg.path.stroke"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
                <path *ngIf="options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        attr.stroke="url({{window.location.href}}#{{svg.outerLinearGradient.id}})"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
            </ng-container>
            <text *ngIf="!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)"
                  alignment-baseline="baseline"
                  [attr.x]="svg.circle.cx"
                  [attr.y]="svg.circle.cy"
                  [attr.text-anchor]="svg.title.textAnchor">
                <ng-container *ngIf="options.showTitle">
                    <tspan *ngFor="let tspan of svg.title.tspans"
                           [attr.x]="svg.title.x"
                           [attr.y]="svg.title.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.title.fontSize"
                           [attr.font-weight]="svg.title.fontWeight"
                           [attr.fill]="svg.title.color">{{tspan.span}}</tspan>
                </ng-container>
                <tspan *ngIf="options.showUnits"
                       [attr.font-size]="svg.units.fontSize"
                       [attr.font-weight]="svg.units.fontWeight"
                       [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
                <ng-container *ngIf="options.showSubtitle">
                    <tspan *ngFor="let tspan of svg.subtitle.tspans"
                           [attr.x]="svg.subtitle.x"
                           [attr.y]="svg.subtitle.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.subtitle.fontSize"
                           [attr.font-weight]="svg.subtitle.fontWeight"
                           [attr.fill]="svg.subtitle.color">{{tspan.span}}</tspan>
                </ng-container>
            </text>
            <image *ngIf="options.showImage" preserveAspectRatio="none" 
                [attr.height]="svg.image.height"
                [attr.width]="svg.image.width"
                [attr.xlink:href]="svg.image.src"
                [attr.x]="svg.image.x"
                [attr.y]="svg.image.y"
            />
        </svg>
    `
                }]
        }], ctorParameters: function () { return [{ type: CircleProgressOptions }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.Injector }]; }, propDecorators: { onClick: [{
                type: Output
            }], name: [{
                type: Input
            }], class: [{
                type: Input
            }], backgroundGradient: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], backgroundGradientStopColor: [{
                type: Input
            }], backgroundOpacity: [{
                type: Input
            }], backgroundStroke: [{
                type: Input
            }], backgroundStrokeWidth: [{
                type: Input
            }], backgroundPadding: [{
                type: Input
            }], radius: [{
                type: Input
            }], space: [{
                type: Input
            }], percent: [{
                type: Input
            }], toFixed: [{
                type: Input
            }], maxPercent: [{
                type: Input
            }], renderOnClick: [{
                type: Input
            }], units: [{
                type: Input
            }], unitsFontSize: [{
                type: Input
            }], unitsFontWeight: [{
                type: Input
            }], unitsColor: [{
                type: Input
            }], outerStrokeGradient: [{
                type: Input
            }], outerStrokeWidth: [{
                type: Input
            }], outerStrokeColor: [{
                type: Input
            }], outerStrokeGradientStopColor: [{
                type: Input
            }], outerStrokeLinecap: [{
                type: Input
            }], innerStrokeColor: [{
                type: Input
            }], innerStrokeWidth: [{
                type: Input
            }], titleFormat: [{
                type: Input
            }], title: [{
                type: Input
            }], titleColor: [{
                type: Input
            }], titleFontSize: [{
                type: Input
            }], titleFontWeight: [{
                type: Input
            }], subtitleFormat: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], subtitleColor: [{
                type: Input
            }], subtitleFontSize: [{
                type: Input
            }], subtitleFontWeight: [{
                type: Input
            }], imageSrc: [{
                type: Input
            }], imageHeight: [{
                type: Input
            }], imageWidth: [{
                type: Input
            }], animation: [{
                type: Input
            }], animateTitle: [{
                type: Input
            }], animateSubtitle: [{
                type: Input
            }], animationDuration: [{
                type: Input
            }], showTitle: [{
                type: Input
            }], showSubtitle: [{
                type: Input
            }], showUnits: [{
                type: Input
            }], showImage: [{
                type: Input
            }], showBackground: [{
                type: Input
            }], showInnerStroke: [{
                type: Input
            }], clockwise: [{
                type: Input
            }], responsive: [{
                type: Input
            }], startFromZero: [{
                type: Input
            }], showZeroOuterStroke: [{
                type: Input
            }], lazy: [{
                type: Input
            }], templateOptions: [{
                type: Input,
                args: ['options']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNpcmNsZS1wcm9ncmVzcy9zcmMvbGliL25nLWNpcmNsZS1wcm9ncmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBa0UsTUFBTSxlQUFlLENBQUM7QUFDbEosT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBZ0IsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUEwRDNDLE1BQU0sT0FBTyxxQkFBcUI7SUFBbEM7UUFDSSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQzNCLG9CQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLGdDQUEyQixHQUFHLGFBQWEsQ0FBQztRQUM1QyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLDBCQUFxQixHQUFHLENBQUMsQ0FBQztRQUMxQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxTQUFTLENBQUM7UUFDdkIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzVCLHFCQUFnQixHQUFHLENB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SztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLG1CQUFtQjtzQkFBM0IsS0FBSztnQkFFRyxJQUFJO3NCQUFaLEtBQUs7Z0JBRVksZUFBZTtzQkFBaEMsS0FBSzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZXMsIE5nWm9uZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBDaXJjbGVQcm9ncmVzc09wdGlvbnNJbnRlcmZhY2Uge1xuICAgIGNsYXNzPzogc3RyaW5nO1xuICAgIGJhY2tncm91bmRHcmFkaWVudD86IGJvb2xlYW47XG4gICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICAgIGJhY2tncm91bmRHcmFkaWVudFN0b3BDb2xvcj86IHN0cmluZztcbiAgICBiYWNrZ3JvdW5kT3BhY2l0eT86IG51bWJlcjtcbiAgICBiYWNrZ3JvdW5kU3Ryb2tlPzogc3RyaW5nO1xuICAgIGJhY2tncm91bmRTdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICBiYWNrZ3JvdW5kUGFkZGluZz86IG51bWJlcjtcbiAgICBwZXJjZW50PzogbnVtYmVyO1xuICAgIHJhZGl1cz86IG51bWJlcjtcbiAgICBzcGFjZT86IG51bWJlcjtcbiAgICB0b0ZpeGVkPzogbnVtYmVyO1xuICAgIG1heFBlcmNlbnQ/OiBudW1iZXI7XG4gICAgcmVuZGVyT25DbGljaz86IGJvb2xlYW47XG4gICAgdW5pdHM/OiBzdHJpbmc7XG4gICAgdW5pdHNGb250U2l6ZT86IHN0cmluZztcbiAgICB1bml0c0ZvbnRXZWlnaHQ/OiBzdHJpbmc7XG4gICAgdW5pdHNDb2xvcj86IHN0cmluZztcbiAgICBvdXRlclN0cm9rZUdyYWRpZW50PzogYm9vbGVhbjtcbiAgICBvdXRlclN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAgIG91dGVyU3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG4gICAgb3V0ZXJTdHJva2VHcmFkaWVudFN0b3BDb2xvcj86IHN0cmluZztcbiAgICBvdXRlclN0cm9rZUxpbmVjYXA/OiBzdHJpbmc7XG4gICAgaW5uZXJTdHJva2VDb2xvcj86IHN0cmluZztcbiAgICBpbm5lclN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAgIHRpdGxlRm9ybWF0PzogRnVuY3Rpb247XG4gICAgdGl0bGU/OiBzdHJpbmcgfCBBcnJheTxTdHJpbmc+O1xuICAgIHRpdGxlQ29sb3I/OiBzdHJpbmc7XG4gICAgdGl0bGVGb250U2l6ZT86IHN0cmluZztcbiAgICB0aXRsZUZvbnRXZWlnaHQ/OiBzdHJpbmc7XG4gICAgc3VidGl0bGVGb3JtYXQ/OiBGdW5jdGlvbjtcbiAgICBzdWJ0aXRsZT86IHN0cmluZyB8IEFycmF5PFN0cmluZz47XG4gICAgc3VidGl0bGVDb2xvcj86IHN0cmluZztcbiAgICBzdWJ0aXRsZUZvbnRTaXplPzogc3RyaW5nO1xuICAgIHN1YnRpdGxlRm9udFdlaWdodD86IHN0cmluZztcbiAgICBpbWFnZVNyYz86IHN0cmluZztcbiAgICBpbWFnZUhlaWdodD86IG51bWJlcjtcbiAgICBpbWFnZVdpZHRoPzogbnVtYmVyO1xuICAgIGFuaW1hdGlvbj86IGJvb2xlYW47XG4gICAgYW5pbWF0ZVRpdGxlPzogYm9vbGVhbjtcbiAgICBhbmltYXRlU3VidGl0bGU/OiBib29sZWFuO1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICAgIHNob3dUaXRsZT86IGJvb2xlYW47XG4gICAgc2hvd1N1YnRpdGxlPzogYm9vbGVhbjtcbiAgICBzaG93VW5pdHM/OiBib29sZWFuO1xuICAgIHNob3dJbWFnZT86IGJvb2xlYW47XG4gICAgc2hvd0JhY2tncm91bmQ/OiBib29sZWFuO1xuICAgIHNob3dJbm5lclN0cm9rZT86IGJvb2xlYW47XG4gICAgY2xvY2t3aXNlPzogYm9vbGVhbjtcbiAgICByZXNwb25zaXZlPzogYm9vbGVhbjtcbiAgICBzdGFydEZyb21aZXJvPzogYm9vbGVhbjtcbiAgICBzaG93WmVyb091dGVyU3Ryb2tlPzogYm9vbGVhbjtcbiAgICBsYXp5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIENpcmNsZVByb2dyZXNzT3B0aW9ucyBpbXBsZW1lbnRzIENpcmNsZVByb2dyZXNzT3B0aW9uc0ludGVyZmFjZSB7XG4gICAgY2xhc3MgPSAnJztcbiAgICBiYWNrZ3JvdW5kR3JhZGllbnQgPSBmYWxzZTtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIGJhY2tncm91bmRHcmFkaWVudFN0b3BDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgYmFja2dyb3VuZE9wYWNpdHkgPSAxO1xuICAgIGJhY2tncm91bmRTdHJva2UgPSAndHJhbnNwYXJlbnQnO1xuICAgIGJhY2tncm91bmRTdHJva2VXaWR0aCA9IDA7XG4gICAgYmFja2dyb3VuZFBhZGRpbmcgPSA1O1xuICAgIHBlcmNlbnQgPSAwO1xuICAgIHJhZGl1cyA9IDkwO1xuICAgIHNwYWNlID0gNDtcbiAgICB0b0ZpeGVkID0gMDtcbiAgICBtYXhQZXJjZW50ID0gMTAwMDtcbiAgICByZW5kZXJPbkNsaWNrID0gdHJ1ZTtcbiAgICB1bml0cyA9ICclJztcbiAgICB1bml0c0ZvbnRTaXplID0gJzEwJztcbiAgICB1bml0c0ZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgICB1bml0c0NvbG9yID0gJyM0NDQ0NDQnO1xuICAgIG91dGVyU3Ryb2tlR3JhZGllbnQgPSBmYWxzZTtcbiAgICBvdXRlclN0cm9rZVdpZHRoID0gODtcbiAgICBvdXRlclN0cm9rZUNvbG9yID0gJyM3OEMwMDAnO1xuICAgIG91dGVyU3Ryb2tlR3JhZGllbnRTdG9wQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIG91dGVyU3Ryb2tlTGluZWNhcCA9ICdyb3VuZCc7XG4gICAgaW5uZXJTdHJva2VDb2xvciA9ICcjQzdFNTk2JztcbiAgICBpbm5lclN0cm9rZVdpZHRoID0gNDtcbiAgICB0aXRsZUZvcm1hdCA9IHVuZGVmaW5lZDtcbiAgICB0aXRsZTogc3RyaW5nIHwgQXJyYXk8U3RyaW5nPiA9ICdhdXRvJztcbiAgICB0aXRsZUNvbG9yID0gJyM0NDQ0NDQnO1xuICAgIHRpdGxlRm9udFNpemUgPSAnMjAnO1xuICAgIHRpdGxlRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICAgIHN1YnRpdGxlRm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgIHN1YnRpdGxlOiBzdHJpbmcgfCBBcnJheTxTdHJpbmc+ID0gJ3Byb2dyZXNzJztcbiAgICBzdWJ0aXRsZUNvbG9yID0gJyNBOUE5QTknO1xuICAgIHN1YnRpdGxlRm9udFNpemUgPSAnMTAnO1xuICAgIHN1YnRpdGxlRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICAgIGltYWdlU3JjID0gdW5kZWZpbmVkO1xuICAgIGltYWdlSGVpZ2h0ID0gMDtcbiAgICBpbWFnZVdpZHRoID0gMDtcbiAgICBhbmltYXRpb24gPSB0cnVlO1xuICAgIGFuaW1hdGVUaXRsZSA9IHRydWU7XG4gICAgYW5pbWF0ZVN1YnRpdGxlID0gZmFsc2U7XG4gICAgYW5pbWF0aW9uRHVyYXRpb24gPSA1MDA7XG4gICAgc2hvd1RpdGxlID0gdHJ1ZTtcbiAgICBzaG93U3VidGl0bGUgPSB0cnVlO1xuICAgIHNob3dVbml0cyA9IHRydWU7XG4gICAgc2hvd0ltYWdlID0gZmFsc2U7XG4gICAgc2hvd0JhY2tncm91bmQgPSB0cnVlO1xuICAgIHNob3dJbm5lclN0cm9rZSA9IHRydWU7XG4gICAgY2xvY2t3aXNlID0gdHJ1ZTtcbiAgICByZXNwb25zaXZlID0gZmFsc2U7XG4gICAgc3RhcnRGcm9tWmVybyA9IHRydWU7XG4gICAgc2hvd1plcm9PdXRlclN0cm9rZSA9IHRydWU7XG4gICAgbGF6eSA9IGZhbHNlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NpcmNsZS1wcm9ncmVzcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgKm5nSWY9XCJzdmdcIlxuICAgICAgICAgICAgIFthdHRyLnZpZXdCb3hdPVwic3ZnLnZpZXdCb3hcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiXG4gICAgICAgICAgICAgW2F0dHIuaGVpZ2h0XT1cInN2Zy5oZWlnaHRcIiBbYXR0ci53aWR0aF09XCJzdmcud2lkdGhcIiAoY2xpY2spPVwiZW1pdENsaWNrRXZlbnQoJGV2ZW50KVwiIFthdHRyLmNsYXNzXT1cIm9wdGlvbnMuY2xhc3NcIj5cbiAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCAqbmdJZj1cIm9wdGlvbnMub3V0ZXJTdHJva2VHcmFkaWVudFwiIFthdHRyLmlkXT1cInN2Zy5vdXRlckxpbmVhckdyYWRpZW50LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjUlXCIgW2F0dHIuc3RvcC1jb2xvcl09XCJzdmcub3V0ZXJMaW5lYXJHcmFkaWVudC5jb2xvclN0b3AxXCIgIFthdHRyLnN0b3Atb3BhY2l0eV09XCIxXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI5NSVcIiBbYXR0ci5zdG9wLWNvbG9yXT1cInN2Zy5vdXRlckxpbmVhckdyYWRpZW50LmNvbG9yU3RvcDJcIiBbYXR0ci5zdG9wLW9wYWNpdHldPVwiMVwiLz5cbiAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgIDxyYWRpYWxHcmFkaWVudCAqbmdJZj1cIm9wdGlvbnMuYmFja2dyb3VuZEdyYWRpZW50XCIgW2F0dHIuaWRdPVwic3ZnLnJhZGlhbEdyYWRpZW50LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjUlXCIgW2F0dHIuc3RvcC1jb2xvcl09XCJzdmcucmFkaWFsR3JhZGllbnQuY29sb3JTdG9wMVwiIFthdHRyLnN0b3Atb3BhY2l0eV09XCIxXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI5NSVcIiBbYXR0ci5zdG9wLWNvbG9yXT1cInN2Zy5yYWRpYWxHcmFkaWVudC5jb2xvclN0b3AyXCIgW2F0dHIuc3RvcC1vcGFjaXR5XT1cIjFcIi8+XG4gICAgICAgICAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLnNob3dCYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSAqbmdJZj1cIiFvcHRpb25zLmJhY2tncm91bmRHcmFkaWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5jeF09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5jeFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5jeV09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5yXT1cInN2Zy5iYWNrZ3JvdW5kQ2lyY2xlLnJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5maWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZpbGwtb3BhY2l0eV09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5maWxsT3BhY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5zdHJva2VdPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuc3Ryb2tlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5zdHJva2VXaWR0aFwiLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlICpuZ0lmPVwib3B0aW9ucy5iYWNrZ3JvdW5kR3JhZGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuY3hdPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuY3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuY3ldPVwic3ZnLmJhY2tncm91bmRDaXJjbGUuY3lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIucl09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIuZmlsbD1cInVybCh7e3dpbmRvdy5sb2NhdGlvbi5ocmVmfX0je3tzdmcucmFkaWFsR3JhZGllbnQuaWR9fSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cInN2Zy5iYWNrZ3JvdW5kQ2lyY2xlLmZpbGxPcGFjaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnN0cm9rZV09XCJzdmcuYmFja2dyb3VuZENpcmNsZS5zdHJva2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN2Zy5iYWNrZ3JvdW5kQ2lyY2xlLnN0cm9rZVdpZHRoXCIvPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+ICAgICAgICAgICAgXG4gICAgICAgICAgICA8Y2lyY2xlICpuZ0lmPVwib3B0aW9ucy5zaG93SW5uZXJTdHJva2VcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5jeF09XCJzdmcuY2lyY2xlLmN4XCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuY3ldPVwic3ZnLmNpcmNsZS5jeVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLnJdPVwic3ZnLmNpcmNsZS5yXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJzdmcuY2lyY2xlLmZpbGxcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5zdHJva2VdPVwic3ZnLmNpcmNsZS5zdHJva2VcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3ZnLmNpcmNsZS5zdHJva2VXaWR0aFwiLz5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIrb3B0aW9ucy5wZXJjZW50IT09MCB8fCBvcHRpb25zLnNob3daZXJvT3V0ZXJTdHJva2VcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCAqbmdJZj1cIiFvcHRpb25zLm91dGVyU3Ryb2tlR3JhZGllbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZF09XCJzdmcucGF0aC5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnN0cm9rZV09XCJzdmcucGF0aC5zdHJva2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLXdpZHRoXT1cInN2Zy5wYXRoLnN0cm9rZVdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnN0cm9rZS1saW5lY2FwXT1cInN2Zy5wYXRoLnN0cm9rZUxpbmVjYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJzdmcucGF0aC5maWxsXCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoICpuZ0lmPVwib3B0aW9ucy5vdXRlclN0cm9rZUdyYWRpZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRdPVwic3ZnLnBhdGguZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyLnN0cm9rZT1cInVybCh7e3dpbmRvdy5sb2NhdGlvbi5ocmVmfX0je3tzdmcub3V0ZXJMaW5lYXJHcmFkaWVudC5pZH19KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3ZnLnBhdGguc3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuc3Ryb2tlLWxpbmVjYXBdPVwic3ZnLnBhdGguc3Ryb2tlTGluZWNhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInN2Zy5wYXRoLmZpbGxcIi8+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDx0ZXh0ICpuZ0lmPVwiIW9wdGlvbnMuc2hvd0ltYWdlICYmIChvcHRpb25zLnNob3dUaXRsZSB8fCBvcHRpb25zLnNob3dVbml0cyB8fCBvcHRpb25zLnNob3dTdWJ0aXRsZSlcIlxuICAgICAgICAgICAgICAgICAgYWxpZ25tZW50LWJhc2VsaW5lPVwiYmFzZWxpbmVcIlxuICAgICAgICAgICAgICAgICAgW2F0dHIueF09XCJzdmcuY2lyY2xlLmN4XCJcbiAgICAgICAgICAgICAgICAgIFthdHRyLnldPVwic3ZnLmNpcmNsZS5jeVwiXG4gICAgICAgICAgICAgICAgICBbYXR0ci50ZXh0LWFuY2hvcl09XCJzdmcudGl0bGUudGV4dEFuY2hvclwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zLnNob3dUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHNwYW4gKm5nRm9yPVwibGV0IHRzcGFuIG9mIHN2Zy50aXRsZS50c3BhbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIueF09XCJzdmcudGl0bGUueFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci55XT1cInN2Zy50aXRsZS55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmR5XT1cInRzcGFuLmR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmZvbnQtc2l6ZV09XCJzdmcudGl0bGUuZm9udFNpemVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZm9udC13ZWlnaHRdPVwic3ZnLnRpdGxlLmZvbnRXZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZmlsbF09XCJzdmcudGl0bGUuY29sb3JcIj57e3RzcGFuLnNwYW59fTwvdHNwYW4+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPHRzcGFuICpuZ0lmPVwib3B0aW9ucy5zaG93VW5pdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5mb250LXNpemVdPVwic3ZnLnVuaXRzLmZvbnRTaXplXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZm9udC13ZWlnaHRdPVwic3ZnLnVuaXRzLmZvbnRXZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInN2Zy51bml0cy5jb2xvclwiPnt7c3ZnLnVuaXRzLnRleHR9fTwvdHNwYW4+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm9wdGlvbnMuc2hvd1N1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0c3BhbiAqbmdGb3I9XCJsZXQgdHNwYW4gb2Ygc3ZnLnN1YnRpdGxlLnRzcGFuc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci54XT1cInN2Zy5zdWJ0aXRsZS54XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnldPVwic3ZnLnN1YnRpdGxlLnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZHldPVwidHNwYW4uZHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuZm9udC1zaXplXT1cInN2Zy5zdWJ0aXRsZS5mb250U2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5mb250LXdlaWdodF09XCJzdmcuc3VidGl0bGUuZm9udFdlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5maWxsXT1cInN2Zy5zdWJ0aXRsZS5jb2xvclwiPnt7dHNwYW4uc3Bhbn19PC90c3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgIDxpbWFnZSAqbmdJZj1cIm9wdGlvbnMuc2hvd0ltYWdlXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiBcbiAgICAgICAgICAgICAgICBbYXR0ci5oZWlnaHRdPVwic3ZnLmltYWdlLmhlaWdodFwiXG4gICAgICAgICAgICAgICAgW2F0dHIud2lkdGhdPVwic3ZnLmltYWdlLndpZHRoXCJcbiAgICAgICAgICAgICAgICBbYXR0ci54bGluazpocmVmXT1cInN2Zy5pbWFnZS5zcmNcIlxuICAgICAgICAgICAgICAgIFthdHRyLnhdPVwic3ZnLmltYWdlLnhcIlxuICAgICAgICAgICAgICAgIFthdHRyLnldPVwic3ZnLmltYWdlLnlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaXJjbGVQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgICBASW5wdXQoKSBiYWNrZ3JvdW5kR3JhZGllbnQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYmFja2dyb3VuZEdyYWRpZW50U3RvcENvbG9yOiBTdHJpbmc7XG4gICAgQElucHV0KCkgYmFja2dyb3VuZE9wYWNpdHk6IG51bWJlcjtcbiAgICBASW5wdXQoKSBiYWNrZ3JvdW5kU3Ryb2tlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYmFja2dyb3VuZFN0cm9rZVdpZHRoOiBudW1iZXI7XG4gICAgQElucHV0KCkgYmFja2dyb3VuZFBhZGRpbmc6IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHJhZGl1czogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHNwYWNlOiBudW1iZXI7XG4gICAgQElucHV0KCkgcGVyY2VudDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHRvRml4ZWQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSBtYXhQZXJjZW50OiBudW1iZXI7XG4gICAgQElucHV0KCkgcmVuZGVyT25DbGljazogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIHVuaXRzOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdW5pdHNGb250U2l6ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVuaXRzRm9udFdlaWdodDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHVuaXRzQ29sb3I6IHN0cmluZztcblxuICAgIEBJbnB1dCgpIG91dGVyU3Ryb2tlR3JhZGllbnQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgb3V0ZXJTdHJva2VXaWR0aDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIG91dGVyU3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBvdXRlclN0cm9rZUdyYWRpZW50U3RvcENvbG9yOiBTdHJpbmc7XG4gICAgQElucHV0KCkgb3V0ZXJTdHJva2VMaW5lY2FwOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpbm5lclN0cm9rZUNvbG9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaW5uZXJTdHJva2VXaWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gICAgQElucHV0KCkgdGl0bGVGb3JtYXQ6IEZ1bmN0aW9uO1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBBcnJheTxTdHJpbmc+O1xuICAgIEBJbnB1dCgpIHRpdGxlQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB0aXRsZUZvbnRTaXplOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGl0bGVGb250V2VpZ2h0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBzdWJ0aXRsZUZvcm1hdDogRnVuY3Rpb247XG4gICAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIHN1YnRpdGxlQ29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBzdWJ0aXRsZUZvbnRTaXplOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3VidGl0bGVGb250V2VpZ2h0OiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKSBpbWFnZVNyYzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGltYWdlSGVpZ2h0OiBudW1iZXI7XG4gICAgQElucHV0KCkgaW1hZ2VXaWR0aDogbnVtYmVyO1xuXG4gICAgQElucHV0KCkgYW5pbWF0aW9uOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGFuaW1hdGVUaXRsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBhbmltYXRlU3VidGl0bGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlcjtcblxuICAgIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaG93U3VidGl0bGU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2hvd1VuaXRzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHNob3dJbWFnZTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaG93QmFja2dyb3VuZDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaG93SW5uZXJTdHJva2U6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY2xvY2t3aXNlOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIHJlc3BvbnNpdmU6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc3RhcnRGcm9tWmVybzogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBzaG93WmVyb091dGVyU3Ryb2tlOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgbGF6eTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgnb3B0aW9ucycpIHRlbXBsYXRlT3B0aW9uczogQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zO1xuXG4gICAgLy8gPHN2Zz4gb2YgY29tcG9uZW50XG4gICAgc3ZnRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIC8vIHdoZXRoZXIgPHN2Zz4gaXMgaW4gdmlld3BvcnRcbiAgICBpc0luVmlld3BvcnQ6IEJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyBldmVudCBmb3Igbm90aWZ5aW5nIHZpZXdwb3J0IGNoYW5nZSBjYXVzZWQgYnkgc2Nyb2xsaW5nIG9yIHJlc2l6aW5nXG4gICAgb25WaWV3cG9ydENoYW5nZWQ6IEV2ZW50RW1pdHRlcjx7IG9sZFZhbHVlOiBCb29sZWFuLCBuZXdWYWx1ZTogQm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB3aW5kb3c6IFdpbmRvdztcbiAgICBfdmlld3BvcnRDaGFuZ2VkU3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uID0gbnVsbDtcblxuICAgIHN2ZzogYW55O1xuXG4gICAgb3B0aW9uczogQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zID0gbmV3IENpcmNsZVByb2dyZXNzT3B0aW9ucygpO1xuICAgIGRlZmF1bHRPcHRpb25zOiBDaXJjbGVQcm9ncmVzc09wdGlvbnMgPSBuZXcgQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zKCk7XG4gICAgX2xhc3RQZXJjZW50OiBudW1iZXIgPSAwO1xuICAgIF9ncmFkaWVudFVVSUQ6IHN0cmluZyA9IG51bGw7XG4gICAgcmVuZGVyID0gKCkgPT4ge1xuXG4gICAgICAgIHRoaXMuYXBwbHlPcHRpb25zKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sYXp5KSB7XG4gICAgICAgICAgICAvLyBEcmF3IHN2ZyBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICB0aGlzLnN2Z0VsZW1lbnQgPT09IG51bGwgJiYgdGhpcy5kcmF3KHRoaXMuX2xhc3RQZXJjZW50KTtcbiAgICAgICAgICAgIC8vIERyYXcgaXQgb25seSB3aGVuIGl0J3MgaW4gdGhlIHZpZXdwb3J0XG4gICAgICAgICAgICBpZiAodGhpcy5pc0luVmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICAvLyBEcmF3IGl0IGF0IHRoZSBsYXRlc3QgcG9zaXRpb24gd2hlbiBJIGFtIGluLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uICYmIHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlKHRoaXMuX2xhc3RQZXJjZW50LCB0aGlzLm9wdGlvbnMucGVyY2VudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3KHRoaXMub3B0aW9ucy5wZXJjZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFBlcmNlbnQgPSB0aGlzLm9wdGlvbnMucGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uICYmIHRoaXMub3B0aW9ucy5hbmltYXRpb25EdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUodGhpcy5fbGFzdFBlcmNlbnQsIHRoaXMub3B0aW9ucy5wZXJjZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KHRoaXMub3B0aW9ucy5wZXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2xhc3RQZXJjZW50ID0gdGhpcy5vcHRpb25zLnBlcmNlbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHBvbGFyVG9DYXJ0ZXNpYW4gPSAoY2VudGVyWDogbnVtYmVyLCBjZW50ZXJZOiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBhbmdsZUluRGVncmVlczogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBhbmdsZUluUmFkaXVzID0gYW5nbGVJbkRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICBsZXQgeCA9IGNlbnRlclggKyBNYXRoLnNpbihhbmdsZUluUmFkaXVzKSAqIHJhZGl1cztcbiAgICAgICAgbGV0IHkgPSBjZW50ZXJZIC0gTWF0aC5jb3MoYW5nbGVJblJhZGl1cykgKiByYWRpdXM7XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHkgfTtcbiAgICB9O1xuICAgIGRyYXcgPSAocGVyY2VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIG1ha2UgcGVyY2VudCByZWFzb25hYmxlXG4gICAgICAgIHBlcmNlbnQgPSAocGVyY2VudCA9PT0gdW5kZWZpbmVkKSA/IHRoaXMub3B0aW9ucy5wZXJjZW50IDogTWF0aC5hYnMocGVyY2VudCk7XG4gICAgICAgIC8vIGNpcmNsZSBwZXJjZW50IHNob3VsZG4ndCBiZSBncmVhdGVyIHRoYW4gMTAwJS5cbiAgICAgICAgbGV0IGNpcmNsZVBlcmNlbnQgPSAocGVyY2VudCA+IDEwMCkgPyAxMDAgOiBwZXJjZW50O1xuICAgICAgICAvLyBkZXRlcm1pbmUgYm94IHNpemVcbiAgICAgICAgbGV0IGJveFNpemUgPSB0aGlzLm9wdGlvbnMucmFkaXVzICogMiArIHRoaXMub3B0aW9ucy5vdXRlclN0cm9rZVdpZHRoICogMjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93QmFja2dyb3VuZCkge1xuICAgICAgICAgICAgYm94U2l6ZSArPSAodGhpcy5vcHRpb25zLmJhY2tncm91bmRTdHJva2VXaWR0aCAqIDIgKyB0aGlzLm1heCgwLCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZFBhZGRpbmcgKiAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIGNlbnRyZSBvZiB0aGUgY2lyY2xlXG4gICAgICAgIGxldCBjZW50cmUgPSB7IHg6IGJveFNpemUgLyAyLCB5OiBib3hTaXplIC8gMiB9O1xuICAgICAgICAvLyB0aGUgc3RhcnQgcG9pbnQgb2YgdGhlIGFyY1xuICAgICAgICBsZXQgc3RhcnRQb2ludCA9IHsgeDogY2VudHJlLngsIHk6IGNlbnRyZS55IC0gdGhpcy5vcHRpb25zLnJhZGl1cyB9O1xuICAgICAgICAvLyBnZXQgdGhlIGVuZCBwb2ludCBvZiB0aGUgYXJjXG4gICAgICAgIGxldCBlbmRQb2ludCA9IHRoaXMucG9sYXJUb0NhcnRlc2lhbihjZW50cmUueCwgY2VudHJlLnksIHRoaXMub3B0aW9ucy5yYWRpdXMsIDM2MCAqICh0aGlzLm9wdGlvbnMuY2xvY2t3aXNlID9cbiAgICAgICAgICAgIGNpcmNsZVBlcmNlbnQgOlxuICAgICAgICAgICAgKDEwMCAtIGNpcmNsZVBlcmNlbnQpKSAvIDEwMCk7ICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjI1xuICAgICAgICAvLyBXZSdsbCBnZXQgYW4gZW5kIHBvaW50IHdpdGggdGhlIHNhbWUgW3gsIHldIGFzIHRoZSBzdGFydCBwb2ludCB3aGVuIHBlcmNlbnQgaXMgMTAwJSwgc28gbW92ZSB4IGEgbGl0dGxlIGJpdC5cbiAgICAgICAgaWYgKGNpcmNsZVBlcmNlbnQgPT09IDEwMCkge1xuICAgICAgICAgICAgZW5kUG9pbnQueCA9IGVuZFBvaW50LnggKyAodGhpcy5vcHRpb25zLmNsb2Nrd2lzZSA/IC0wLjAxIDogKzAuMDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxhcmdlQXJjRmxhZyBhbmQgc3dlZXBGbGFnXG4gICAgICAgIGxldCBsYXJnZUFyY0ZsYWc6IGFueSwgc3dlZXBGbGFnOiBhbnk7XG4gICAgICAgIGlmIChjaXJjbGVQZXJjZW50ID4gNTApIHtcbiAgICAgICAgICAgIFtsYXJnZUFyY0ZsYWcsIHN3ZWVwRmxhZ10gPSB0aGlzLm9wdGlvbnMuY2xvY2t3aXNlID8gWzEsIDFdIDogWzEsIDBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgW2xhcmdlQXJjRmxhZywgc3dlZXBGbGFnXSA9IHRoaXMub3B0aW9ucy5jbG9ja3dpc2UgPyBbMCwgMV0gOiBbMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGVyY2VudCBtYXkgbm90IGVxdWFsIHRoZSBhY3R1YWwgcGVyY2VudFxuICAgICAgICBsZXQgdGl0bGVQZXJjZW50ID0gdGhpcy5vcHRpb25zLmFuaW1hdGVUaXRsZSA/IHBlcmNlbnQgOiB0aGlzLm9wdGlvbnMucGVyY2VudDtcbiAgICAgICAgbGV0IHRpdGxlVGV4dFBlcmNlbnQgPSB0aXRsZVBlcmNlbnQgPiB0aGlzLm9wdGlvbnMubWF4UGVyY2VudCA/XG4gICAgICAgICAgICBgJHt0aGlzLm9wdGlvbnMubWF4UGVyY2VudC50b0ZpeGVkKHRoaXMub3B0aW9ucy50b0ZpeGVkKX0rYCA6IHRpdGxlUGVyY2VudC50b0ZpeGVkKHRoaXMub3B0aW9ucy50b0ZpeGVkKTtcbiAgICAgICAgbGV0IHN1YnRpdGxlUGVyY2VudCA9IHRoaXMub3B0aW9ucy5hbmltYXRlU3VidGl0bGUgPyBwZXJjZW50IDogdGhpcy5vcHRpb25zLnBlcmNlbnQ7XG4gICAgICAgIC8vIGdldCB0aXRsZSBvYmplY3RcbiAgICAgICAgbGV0IHRpdGxlID0ge1xuICAgICAgICAgICAgeDogY2VudHJlLngsXG4gICAgICAgICAgICB5OiBjZW50cmUueSxcbiAgICAgICAgICAgIHRleHRBbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3B0aW9ucy50aXRsZUNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMub3B0aW9ucy50aXRsZUZvbnRTaXplLFxuICAgICAgICAgICAgZm9udFdlaWdodDogdGhpcy5vcHRpb25zLnRpdGxlRm9udFdlaWdodCxcbiAgICAgICAgICAgIHRleHRzOiBbXSxcbiAgICAgICAgICAgIHRzcGFuczogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gZnJvbSB2MC45LjksIGJvdGggdGl0bGUgYW5kIHRpdGxlRm9ybWF0KC4uLikgbWF5IGJlIGFuIGFycmF5IG9mIHN0cmluZy5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50aXRsZUZvcm1hdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMub3B0aW9ucy50aXRsZUZvcm1hdC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVkID0gdGhpcy5vcHRpb25zLnRpdGxlRm9ybWF0KHRpdGxlUGVyY2VudCk7XG4gICAgICAgICAgICBpZiAoZm9ybWF0dGVkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0cyA9IFsuLi5mb3JtYXR0ZWRdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0cy5wdXNoKGZvcm1hdHRlZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGl0bGUgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgIHRpdGxlLnRleHRzLnB1c2godGl0bGVUZXh0UGVyY2VudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGl0bGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZS50ZXh0cyA9IFsuLi50aGlzLm9wdGlvbnMudGl0bGVdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUudGV4dHMucHVzaCh0aGlzLm9wdGlvbnMudGl0bGUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGdldCBzdWJ0aXRsZSBvYmplY3RcbiAgICAgICAgbGV0IHN1YnRpdGxlID0ge1xuICAgICAgICAgICAgeDogY2VudHJlLngsXG4gICAgICAgICAgICB5OiBjZW50cmUueSxcbiAgICAgICAgICAgIHRleHRBbmNob3I6ICdtaWRkbGUnLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMub3B0aW9ucy5zdWJ0aXRsZUNvbG9yLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMub3B0aW9ucy5zdWJ0aXRsZUZvbnRTaXplLFxuICAgICAgICAgICAgZm9udFdlaWdodDogdGhpcy5vcHRpb25zLnN1YnRpdGxlRm9udFdlaWdodCxcbiAgICAgICAgICAgIHRleHRzOiBbXSxcbiAgICAgICAgICAgIHRzcGFuczogW11cbiAgICAgICAgfVxuICAgICAgICAvLyBmcm9tIHYwLjkuOSwgYm90aCBzdWJ0aXRsZSBhbmQgc3VidGl0bGVGb3JtYXQoLi4uKSBtYXkgYmUgYW4gYXJyYXkgb2Ygc3RyaW5nLlxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1YnRpdGxlRm9ybWF0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vcHRpb25zLnN1YnRpdGxlRm9ybWF0LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0ZWQgPSB0aGlzLm9wdGlvbnMuc3VidGl0bGVGb3JtYXQoc3VidGl0bGVQZXJjZW50KTtcbiAgICAgICAgICAgIGlmIChmb3JtYXR0ZWQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHN1YnRpdGxlLnRleHRzID0gWy4uLmZvcm1hdHRlZF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1YnRpdGxlLnRleHRzLnB1c2goZm9ybWF0dGVkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdWJ0aXRsZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgc3VidGl0bGUudGV4dHMgPSBbLi4udGhpcy5vcHRpb25zLnN1YnRpdGxlXVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZS50ZXh0cy5wdXNoKHRoaXMub3B0aW9ucy5zdWJ0aXRsZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBnZXQgdW5pdHMgb2JqZWN0XG4gICAgICAgIGxldCB1bml0cyA9IHtcbiAgICAgICAgICAgIHRleHQ6IGAke3RoaXMub3B0aW9ucy51bml0c31gLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMub3B0aW9ucy51bml0c0ZvbnRTaXplLFxuICAgICAgICAgICAgZm9udFdlaWdodDogdGhpcy5vcHRpb25zLnVuaXRzRm9udFdlaWdodCxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLm9wdGlvbnMudW5pdHNDb2xvclxuICAgICAgICB9O1xuICAgICAgICAvLyBnZXQgdG90YWwgY291bnQgb2YgdGV4dCBsaW5lcyB0byBiZSBzaG93blxuICAgICAgICBsZXQgcm93Q291bnQgPSAwLCByb3dOdW0gPSAxO1xuICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd1RpdGxlICYmIChyb3dDb3VudCArPSB0aXRsZS50ZXh0cy5sZW5ndGgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMuc2hvd1N1YnRpdGxlICYmIChyb3dDb3VudCArPSBzdWJ0aXRsZS50ZXh0cy5sZW5ndGgpO1xuICAgICAgICAvLyBjYWxjIGR5IGZvciBlYWNoIHRzcGFuIGZvciB0aXRsZVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dUaXRsZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgc3BhbiBvZiB0aXRsZS50ZXh0cykge1xuICAgICAgICAgICAgICAgIHRpdGxlLnRzcGFucy5wdXNoKHsgc3Bhbjogc3BhbiwgZHk6IHRoaXMuZ2V0UmVsYXRpdmVZKHJvd051bSwgcm93Q291bnQpIH0pO1xuICAgICAgICAgICAgICAgIHJvd051bSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNhbGMgZHkgZm9yIGVhY2ggdHNwYW4gZm9yIHN1YnRpdGxlXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd1N1YnRpdGxlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBzcGFuIG9mIHN1YnRpdGxlLnRleHRzKSB7XG4gICAgICAgICAgICAgICAgc3VidGl0bGUudHNwYW5zLnB1c2goeyBzcGFuOiBzcGFuLCBkeTogdGhpcy5nZXRSZWxhdGl2ZVkocm93TnVtLCByb3dDb3VudCkgfSlcbiAgICAgICAgICAgICAgICByb3dOdW0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgSUQgZm9yIGdyYWRpZW50IGVsZW1lbnRcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2dyYWRpZW50VVVJRCkge1xuICAgICAgICAgICAgdGhpcy5fZ3JhZGllbnRVVUlEID0gdGhpcy51dWlkKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQnJpbmcgaXQgYWxsIHRvZ2V0aGVyXG4gICAgICAgIHRoaXMuc3ZnID0ge1xuICAgICAgICAgICAgdmlld0JveDogYDAgMCAke2JveFNpemV9ICR7Ym94U2l6ZX1gLFxuICAgICAgICAgICAgLy8gU2V0IGJvdGggd2lkdGggYW5kIGhlaWdodCB0byAnMTAwJScgaWYgaXQncyByZXNwb25zaXZlXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5vcHRpb25zLnJlc3BvbnNpdmUgPyAnMTAwJScgOiBib3hTaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZSA/ICcxMDAlJyA6IGJveFNpemUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ2lyY2xlOiB7XG4gICAgICAgICAgICAgICAgY3g6IGNlbnRyZS54LFxuICAgICAgICAgICAgICAgIGN5OiBjZW50cmUueSxcbiAgICAgICAgICAgICAgICByOiB0aGlzLm9wdGlvbnMucmFkaXVzICsgdGhpcy5vcHRpb25zLm91dGVyU3Ryb2tlV2lkdGggLyAyICsgdGhpcy5vcHRpb25zLmJhY2tncm91bmRQYWRkaW5nLFxuICAgICAgICAgICAgICAgIGZpbGw6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kU3Ryb2tlLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZFN0cm9rZVdpZHRoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgICAgICAvLyBBIHJ4IHJ5IHgtYXhpcy1yb3RhdGlvbiBsYXJnZS1hcmMtZmxhZyBzd2VlcC1mbGFnIHggeSAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvU1ZHL1R1dG9yaWFsL1BhdGhzI0FyY3MpXG4gICAgICAgICAgICAgICAgZDogYE0gJHtzdGFydFBvaW50Lnh9ICR7c3RhcnRQb2ludC55fVxuICAgICAgICBBICR7dGhpcy5vcHRpb25zLnJhZGl1c30gJHt0aGlzLm9wdGlvbnMucmFkaXVzfSAwICR7bGFyZ2VBcmNGbGFnfSAke3N3ZWVwRmxhZ30gJHtlbmRQb2ludC54fSAke2VuZFBvaW50Lnl9YCxcbiAgICAgICAgICAgICAgICBzdHJva2U6IHRoaXMub3B0aW9ucy5vdXRlclN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VXaWR0aCxcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwOiB0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VMaW5lY2FwLFxuICAgICAgICAgICAgICAgIGZpbGw6ICdub25lJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNpcmNsZToge1xuICAgICAgICAgICAgICAgIGN4OiBjZW50cmUueCxcbiAgICAgICAgICAgICAgICBjeTogY2VudHJlLnksXG4gICAgICAgICAgICAgICAgcjogdGhpcy5vcHRpb25zLnJhZGl1cyAtIHRoaXMub3B0aW9ucy5zcGFjZSAtIHRoaXMub3B0aW9ucy5vdXRlclN0cm9rZVdpZHRoIC8gMiAtIHRoaXMub3B0aW9ucy5pbm5lclN0cm9rZVdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICBmaWxsOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLm9wdGlvbnMuaW5uZXJTdHJva2VDb2xvcixcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5vcHRpb25zLmlubmVyU3Ryb2tlV2lkdGgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgdW5pdHM6IHVuaXRzLFxuICAgICAgICAgICAgc3VidGl0bGU6IHN1YnRpdGxlLFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICB4OiBjZW50cmUueCAtIHRoaXMub3B0aW9ucy5pbWFnZVdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiBjZW50cmUueSAtIHRoaXMub3B0aW9ucy5pbWFnZUhlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgc3JjOiB0aGlzLm9wdGlvbnMuaW1hZ2VTcmMsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMub3B0aW9ucy5pbWFnZVdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmltYWdlSGVpZ2h0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG91dGVyTGluZWFyR3JhZGllbnQ6IHtcbiAgICAgICAgICAgICAgICBpZDogJ291dGVyLWxpbmVhci0nICsgdGhpcy5fZ3JhZGllbnRVVUlELFxuICAgICAgICAgICAgICAgIGNvbG9yU3RvcDE6IHRoaXMub3B0aW9ucy5vdXRlclN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgICAgIGNvbG9yU3RvcDI6IHRoaXMub3B0aW9ucy5vdXRlclN0cm9rZUdyYWRpZW50U3RvcENvbG9yID09PSAndHJhbnNwYXJlbnQnID8gJyNGRkYnIDogdGhpcy5vcHRpb25zLm91dGVyU3Ryb2tlR3JhZGllbnRTdG9wQ29sb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFkaWFsR3JhZGllbnQ6IHtcbiAgICAgICAgICAgICAgICBpZDogJ3JhZGlhbC0nICsgdGhpcy5fZ3JhZGllbnRVVUlELFxuICAgICAgICAgICAgICAgIGNvbG9yU3RvcDE6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICAgICAgY29sb3JTdG9wMjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRHcmFkaWVudFN0b3BDb2xvciA9PT0gJ3RyYW5zcGFyZW50JyA/ICcjRkZGJyA6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kR3JhZGllbnRTdG9wQ29sb3IsXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBnZXRBbmltYXRpb25QYXJhbWV0ZXJzID0gKHByZXZpb3VzUGVyY2VudDogbnVtYmVyLCBjdXJyZW50UGVyY2VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IE1JTl9JTlRFUlZBTCA9IDEwO1xuICAgICAgICBsZXQgdGltZXM6IG51bWJlciwgc3RlcDogbnVtYmVyLCBpbnRlcnZhbDogbnVtYmVyO1xuICAgICAgICBsZXQgZnJvbVBlcmNlbnQgPSB0aGlzLm9wdGlvbnMuc3RhcnRGcm9tWmVybyA/IDAgOiAocHJldmlvdXNQZXJjZW50IDwgMCA/IDAgOiBwcmV2aW91c1BlcmNlbnQpO1xuICAgICAgICBsZXQgdG9QZXJjZW50ID0gY3VycmVudFBlcmNlbnQgPCAwID8gMCA6IHRoaXMubWluKGN1cnJlbnRQZXJjZW50LCB0aGlzLm9wdGlvbnMubWF4UGVyY2VudCk7XG4gICAgICAgIGxldCBkZWx0YSA9IE1hdGguYWJzKE1hdGgucm91bmQodG9QZXJjZW50IC0gZnJvbVBlcmNlbnQpKTtcblxuICAgICAgICBpZiAoZGVsdGEgPj0gMTAwKSB7XG4gICAgICAgICAgICAvLyB3ZSB3aWxsIGZpbmlzaCBhbmltYXRpb24gaW4gMTAwIHRpbWVzXG4gICAgICAgICAgICB0aW1lcyA9IDEwMDtcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGVUaXRsZSAmJiAhdGhpcy5vcHRpb25zLmFuaW1hdGVTdWJ0aXRsZSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBzaG93IHRpdGxlIG9yIHN1YnRpdGxlIGFuaW1hdGlvbiBldmVuIGlmIHRoZSBhcmMgaXMgZnVsbCwgd2UgYWxzbyBuZWVkIHRvIGZpbmlzaCBpdCBpbiAxMDAgdGltZXMuXG4gICAgICAgICAgICAgICAgc3RlcCA9IE1hdGgucm91bmQoZGVsdGEgLyB0aW1lcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSB3aWxsIGZpbmlzaCBpbiBhcyBtYW55IHRpbWVzIGFzIHRoZSBudW1iZXIgb2YgcGVyY2VudC5cbiAgICAgICAgICAgIHRpbWVzID0gZGVsdGE7XG4gICAgICAgICAgICBzdGVwID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgdGhlIGludGVydmFsIG9mIHRpbWVyXG4gICAgICAgIGludGVydmFsID0gTWF0aC5yb3VuZCh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gLyB0aW1lcyk7XG4gICAgICAgIC8vIFJlYWRqdXN0IGFsbCB2YWx1ZXMgaWYgdGhlIGludGVydmFsIG9mIHRpbWVyIGlzIGV4dHJlbWVseSBzbWFsbC5cbiAgICAgICAgaWYgKGludGVydmFsIDwgTUlOX0lOVEVSVkFMKSB7XG4gICAgICAgICAgICBpbnRlcnZhbCA9IE1JTl9JTlRFUlZBTDtcbiAgICAgICAgICAgIHRpbWVzID0gdGhpcy5vcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uIC8gaW50ZXJ2YWw7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRlVGl0bGUgJiYgIXRoaXMub3B0aW9ucy5hbmltYXRlU3VidGl0bGUgJiYgZGVsdGEgPiAxMDApIHtcbiAgICAgICAgICAgICAgICBzdGVwID0gTWF0aC5yb3VuZCgxMDAgLyB0aW1lcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0ZXAgPSBNYXRoLnJvdW5kKGRlbHRhIC8gdGltZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0ZXAgbXVzdCBiZSBncmVhdGVyIHRoYW4gMC5cbiAgICAgICAgaWYgKHN0ZXAgPCAxKSB7XG4gICAgICAgICAgICBzdGVwID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyB0aW1lczogdGltZXMsIHN0ZXA6IHN0ZXAsIGludGVydmFsOiBpbnRlcnZhbCB9O1xuICAgIH07XG4gICAgYW5pbWF0ZSA9IChwcmV2aW91c1BlcmNlbnQ6IG51bWJlciwgY3VycmVudFBlcmNlbnQ6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAodGhpcy5fdGltZXJTdWJzY3JpcHRpb24gJiYgIXRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5fdGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZnJvbVBlcmNlbnQgPSB0aGlzLm9wdGlvbnMuc3RhcnRGcm9tWmVybyA/IDAgOiBwcmV2aW91c1BlcmNlbnQ7XG4gICAgICAgIGxldCB0b1BlcmNlbnQgPSBjdXJyZW50UGVyY2VudDtcbiAgICAgICAgbGV0IHsgc3RlcDogc3RlcCwgaW50ZXJ2YWw6IGludGVydmFsIH0gPSB0aGlzLmdldEFuaW1hdGlvblBhcmFtZXRlcnMoZnJvbVBlcmNlbnQsIHRvUGVyY2VudCk7XG4gICAgICAgIGxldCBjb3VudCA9IGZyb21QZXJjZW50O1xuICAgICAgICBpZiAoZnJvbVBlcmNlbnQgPCB0b1BlcmNlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uID0gdGltZXIoMCwgaW50ZXJ2YWwpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gc3RlcDtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPD0gdG9QZXJjZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGVUaXRsZSAmJiAhdGhpcy5vcHRpb25zLmFuaW1hdGVTdWJ0aXRsZSAmJiBjb3VudCA+PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhdyh0b1BlcmNlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhdyhjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcodG9QZXJjZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uID0gdGltZXIoMCwgaW50ZXJ2YWwpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY291bnQgLT0gc3RlcDtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPj0gdG9QZXJjZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGVUaXRsZSAmJiAhdGhpcy5vcHRpb25zLmFuaW1hdGVTdWJ0aXRsZSAmJiB0b1BlcmNlbnQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcodG9QZXJjZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXcoY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3KHRvUGVyY2VudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGVtaXRDbGlja0V2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyT25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKDAsIHRoaXMub3B0aW9ucy5wZXJjZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vbkNsaWNrLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5vbkNsaWNrLmVtaXQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX3RpbWVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBhcHBseU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIC8vIHRoZSBvcHRpb25zIG9mIDxjaXJjbGUtcHJvZ3Jlc3M+IG1heSBjaGFuZ2UgYWxyZWFkeVxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHRoaXNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1tuYW1lXSA9IHRoaXNbbmFtZV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGVtcGxhdGVPcHRpb25zICYmIHRoaXMudGVtcGxhdGVPcHRpb25zW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbbmFtZV0gPSB0aGlzLnRlbXBsYXRlT3B0aW9uc1tuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBtYWtlIHN1cmUga2V5IG9wdGlvbnMgdmFsaWRcbiAgICAgICAgdGhpcy5vcHRpb25zLnJhZGl1cyA9IE1hdGguYWJzKCt0aGlzLm9wdGlvbnMucmFkaXVzKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnNwYWNlID0gK3RoaXMub3B0aW9ucy5zcGFjZTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnBlcmNlbnQgPSArdGhpcy5vcHRpb25zLnBlcmNlbnQgPiAwID8gK3RoaXMub3B0aW9ucy5wZXJjZW50IDogMDtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1heFBlcmNlbnQgPSBNYXRoLmFicygrdGhpcy5vcHRpb25zLm1heFBlcmNlbnQpO1xuICAgICAgICB0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gPSBNYXRoLmFicyh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24pO1xuICAgICAgICB0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VXaWR0aCA9IE1hdGguYWJzKCt0aGlzLm9wdGlvbnMub3V0ZXJTdHJva2VXaWR0aCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pbm5lclN0cm9rZVdpZHRoID0gTWF0aC5hYnMoK3RoaXMub3B0aW9ucy5pbm5lclN0cm9rZVdpZHRoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmJhY2tncm91bmRQYWRkaW5nID0gK3RoaXMub3B0aW9ucy5iYWNrZ3JvdW5kUGFkZGluZztcbiAgICB9O1xuICAgIHByaXZhdGUgZ2V0UmVsYXRpdmVZID0gKHJvd051bTogbnVtYmVyLCByb3dDb3VudDogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgLy8gd2h5ICctMC4xOGVtJz8gSXQncyBhIG1hZ2ljIG51bWJlciB3aGVuIHByb3BlcnR5ICdhbGlnbm1lbnQtYmFzZWxpbmUnIGVxdWFscyAnYmFzZWxpbmUnLiA6KVxuICAgICAgICBsZXQgaW5pdGlhbE9mZnNldCA9IC0wLjE4LCBvZmZzZXQgPSAxO1xuICAgICAgICByZXR1cm4gKGluaXRpYWxPZmZzZXQgKyBvZmZzZXQgKiAocm93TnVtIC0gcm93Q291bnQgLyAyKSkudG9GaXhlZCgyKSArICdlbSc7XG4gICAgfTtcblxuICAgIHByaXZhdGUgbWluID0gKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBhIDwgYiA/IGEgOiBiO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG1heCA9IChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gYSA+IGIgPyBhIDogYjtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSB1dWlkID0gKCkgPT4ge1xuICAgICAgICAvLyBodHRwczovL3d3dy53M3Jlc291cmNlLmNvbS9qYXZhc2NyaXB0LWV4ZXJjaXNlcy9qYXZhc2NyaXB0LW1hdGgtZXhlcmNpc2UtMjMucGhwXG4gICAgICAgIHZhciBkdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGR0ICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICAgICAgICAgIGR0ID0gTWF0aC5mbG9vcihkdCAvIDE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEcmF3aW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuX3RpbWVyU3Vic2NyaXB0aW9uICYmICF0aGlzLl90aW1lclN1YnNjcmlwdGlvbi5jbG9zZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kU3ZnRWxlbWVudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3ZnRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHRhZ3MgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3N2ZycpO1xuICAgICAgICAgICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ZnRWxlbWVudCA9IHRhZ3NbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRWxlbWVudEluVmlld3BvcnQoZWwpOiBCb29sZWFuIHtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIGVsIGhhcyBub3QgYmVlbiBjcmVhdGVkIGluIHBhZ2UuXG4gICAgICAgIGlmIChlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBlbGVtZW50IGlzIG91dCBvZiB2aWV3IGR1ZSB0byBhIGNvbnRhaW5lciBzY3JvbGxpbmdcbiAgICAgICAgbGV0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgcGFyZW50ID0gZWwucGFyZW50Tm9kZSwgcGFyZW50UmVjdDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgcGFyZW50UmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmIChyZWN0LnRvcCA+PSBwYXJlbnRSZWN0LmJvdHRvbSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlY3QuYm90dG9tIDw9IHBhcmVudFJlY3QudG9wKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocmVjdC5sZWZ0ID49IHBhcmVudFJlY3QucmlnaHQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZWN0LnJpZ2h0IDw9IHBhcmVudFJlY3QubGVmdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH0gd2hpbGUgKHBhcmVudCAhPSB0aGlzLmRvY3VtZW50LmJvZHkpO1xuICAgICAgICAvLyBDaGVjayBpdHMgd2l0aGluIHRoZSBkb2N1bWVudCB2aWV3cG9ydFxuICAgICAgICBpZiAocmVjdC50b3AgPj0gKHRoaXMud2luZG93LmlubmVySGVpZ2h0IHx8IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHJlY3QuYm90dG9tIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHJlY3QubGVmdCA+PSAodGhpcy53aW5kb3cuaW5uZXJXaWR0aCB8fCB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHJlY3QucmlnaHQgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjaGVja1ZpZXdwb3J0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbmRTdmdFbGVtZW50KCk7XG4gICAgICAgIGxldCBwcmV2aW91c1ZhbHVlID0gdGhpcy5pc0luVmlld3BvcnQ7XG4gICAgICAgIHRoaXMuaXNJblZpZXdwb3J0ID0gdGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KHRoaXMuc3ZnRWxlbWVudCk7XG4gICAgICAgIGlmIChwcmV2aW91c1ZhbHVlICE9PSB0aGlzLmlzSW5WaWV3cG9ydCAmJiB0aGlzLm9uVmlld3BvcnRDaGFuZ2VkLm9ic2VydmVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLm9uVmlld3BvcnRDaGFuZ2VkLmVtaXQoeyBvbGRWYWx1ZTogcHJldmlvdXNWYWx1ZSwgbmV3VmFsdWU6IHRoaXMuaXNJblZpZXdwb3J0IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNjcm9sbCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5jaGVja1ZpZXdwb3J0KCk7XG4gICAgfVxuXG4gICAgbG9hZEV2ZW50c0ZvckxhenlNb2RlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxhenkpIHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgICAgICAgICAgdGhpcy53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLl92aWV3cG9ydENoYW5nZWRTdWJzY3JpYmVyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdmlld3BvcnRDaGFuZ2VkU3Vic2NyaWJlciA9IHRoaXMub25WaWV3cG9ydENoYW5nZWQuc3Vic2NyaWJlKCh7IG9sZFZhbHVlLCBuZXdWYWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID8gdGhpcy5yZW5kZXIoKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzdmdFbGVtZW50IG11c3QgYmUgY3JlYXRlZCBpbiBET00gYmVmb3JlIGJlaW5nIGNoZWNrZWQuXG4gICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGJldHRlciB3YXkgdG8gY2hlY2sgdGhlIGV4aXN0ZW5jZSBvZiBzdmdFbGVtbnQ/XG4gICAgICAgICAgICBsZXQgX3RpbWVyID0gdGltZXIoMCwgNTApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdmdFbGVtZW50ID09PSBudWxsID8gdGhpcy5jaGVja1ZpZXdwb3J0KCkgOiBfdGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWRFdmVudHNGb3JMYXp5TW9kZSA9ICgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICB0aGlzLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwsIHRydWUpO1xuICAgICAgICB0aGlzLndpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uU2Nyb2xsLCB0cnVlKTtcbiAgICAgICAgLy8gVW5zdWJzY3JpYmUgb25WaWV3cG9ydENoYW5nZWRcbiAgICAgICAgaWYgKHRoaXMuX3ZpZXdwb3J0Q2hhbmdlZFN1YnNjcmliZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0Q2hhbmdlZFN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdwb3J0Q2hhbmdlZFN1YnNjcmliZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZEV2ZW50c0ZvckxhenlNb2RlKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5sb2FkRXZlbnRzRm9yTGF6eU1vZGUoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBpZiAoJ2xhenknIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGNoYW5nZXMubGF6eS5jdXJyZW50VmFsdWUgPyB0aGlzLmxvYWRFdmVudHNGb3JMYXp5TW9kZSgpIDogdGhpcy51bmxvYWRFdmVudHNGb3JMYXp5TW9kZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgZGVmYXVsdE9wdGlvbnM6IENpcmNsZVByb2dyZXNzT3B0aW9ucyxcbiAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICkge1xuICAgICAgICB0aGlzLmRvY3VtZW50ID0gaW5qZWN0b3IuZ2V0KERPQ1VNRU5UKTtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB0aGlzLmRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdE9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==