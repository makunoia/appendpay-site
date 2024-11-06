"use client";
import {
  Alignment,
  Fit,
  Layout,
  LayoutParameters,
  useRive,
} from "@rive-app/react-canvas";

const RiveComponent = ({
  className,
  src,
  stateMachines,
  artboard,
  layout,
  autoplay,
}: {
  className?: string;
  src: string;
  artboard?: string;
  stateMachines: string;
  layout?: LayoutParameters;
  autoplay: boolean;
}) => {
  const { RiveComponent } = useRive({
    src,
    artboard: artboard,
    stateMachines,
    layout: new Layout(
      layout ? layout : { fit: Fit.Contain, alignment: Alignment.Center }
    ),
    autoplay,
    onLoadError: () => console.log("ERROR LOADING RIVE"),
    onLoad: () => console.log("LOADED RIVE"),
  });

  return <RiveComponent className={className} />;
};

export default RiveComponent;
