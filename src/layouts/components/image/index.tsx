import * as React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { usePrevious } from './use-previous';

interface PositionType {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ImageEnlargerProps extends React.HTMLAttributes<any> {
  zoomed: boolean;
  onClick: () => void;
  enlargedSrc?: string;
  overlayColor?: string;
  renderLoading?: React.ReactNode;
  onRequestClose: () => void;
  src: string;
  title: string;
  description: string;
  ups: number;
  downs: number;
  score: number;
}

const initialTransform = 'translateX(0px) translateY(0px) scale(1)';

/**
 * Image component
 * @param param0
 */

const ImageEnlarger: React.FunctionComponent<ImageEnlargerProps> = ({
  zoomed = false,
  renderLoading,
  overlayColor = 'rgba(255,255,255,0.8)',
  enlargedSrc,
  onRequestClose,
  style = {},
  src,
  title,
  description,
  ups,
  downs,
  score,
  ...other
}) => {
  const ref = React.useRef<HTMLImageElement>(null);
  const prevZoom = usePrevious(zoomed);
  const cloneRef = React.useRef<any>(null);
  const [cloneLoaded, setCloneLoaded] = React.useState(false);
  const prevCloneLoaded = usePrevious(cloneLoaded);
  const [hasRequestedZoom, setHasRequestedZoom] = React.useState(zoomed);

  // this allows us to lazily load our cloned image
  React.useEffect(() => {
    if (!hasRequestedZoom && zoomed) {
      setHasRequestedZoom(true);
    }
  }, [hasRequestedZoom, zoomed]);

  /**
   * We basically only use this to imperatively set the
   * visibility of the thumbnail
   */

  const [thumbProps, setThumbProps] = useSpring(() => ({
    opacity: 1,
    immediate: true,
  }));

  // set overlay opacity
  const [overlay, setOverlay] = useSpring(() => ({
    opacity: zoomed ? 1 : 0,
  }));

  // our cloned image spring
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: initialTransform,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    immediate: true,
    config: config.stiff,
  }));

  const generatePositions = React.useCallback(
    (immediate = false) => {
      // any time this prop changes, we update our position
      if (ref.current && cloneLoaded) {
        const rect = ref.current.getBoundingClientRect();

        const cloneSize = {
          width: cloneRef.current!.naturalWidth,
          height: cloneRef.current!.naturalHeight,
        };

        const thumbDimensions = {
          x: rect.left,
          y: rect.top,
          w: rect.width,
          h: rect.height,
        };

        const clonedDimensions = getTargetDimensions(
          cloneSize.width,
          cloneSize.height,
        );

        const initialSize = getInitialClonedDimensions(
          thumbDimensions,
          clonedDimensions,
        );

        const zoomingIn =
          (!prevZoom && zoomed) || (!prevCloneLoaded && cloneLoaded);
        const zoomingOut = prevZoom && !zoomed;

        // handle zooming in
        if (zoomingIn && !immediate) {
          setThumbProps({ opacity: 0, immediate: true });
          set({
            opacity: 1,
            immediate: true,
            transform: `translateX(${initialSize.translateX}px) translateY(${initialSize.translateY}px) scale(${initialSize.scale})`,
            left: clonedDimensions.x,
            top: clonedDimensions.y,
            width: clonedDimensions.w,
            height: clonedDimensions.h,
          });

          set({
            transform: initialTransform,
            immediate: false,
          });

          // handle zooming out
        } else if (zoomingOut) {

          set({
            transform: `translateX(${initialSize.translateX}px) translateY(${initialSize.translateY}px) scale(${initialSize.scale})`,
            immediate: false,
            onRest: () => {
              setThumbProps({ opacity: 1, immediate: true });
              set({ opacity: 0, immediate: true });
              
            },
          });

          // handle resizing
        } else if (immediate) {
          set({
            immediate: true,
            transform: initialTransform,
            left: clonedDimensions.x,
            top: clonedDimensions.y,
            width: clonedDimensions.w,
            height: clonedDimensions.h,
          });
        }

        setOverlay({ opacity: zoomed ? 1 : 0 });
      }
    },
    [
      zoomed,
      cloneLoaded,
      ref,
      cloneRef,
      prevCloneLoaded,
      hasRequestedZoom,
      prevZoom,
    ],
  );

  // we need to update our fixed positioning when resizing
  // this should probably be debounced
  const onResize = React.useCallback(() => {
    generatePositions(true);
  }, [zoomed, generatePositions, cloneLoaded, ref, prevCloneLoaded, prevZoom]);

  // update our various positions
  React.useEffect(() => {
    generatePositions();
    if (zoomed) window.addEventListener('resize', onResize);
    
return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [zoomed, onResize, cloneLoaded, ref, prevCloneLoaded, prevZoom]);

  return (
    <React.Fragment>
      <div className="EnlargedImage">
        <div
          className="EnlargedImage__container"
          style={{ position: 'relative', display: 'inline-block' }}
        >
          <animated.img
            className="EnlargedImage__Image"
            src={src}
            style={{
              cursor: 'zoom-in',
              maxWidth: '100%',
              height: 'auto',
              opacity: thumbProps.opacity,
              ...style,
            }}
            ref={ref}
            {...other}
          />

          {!cloneLoaded && zoomed && renderLoading}
        </div>
      </div>
      {hasRequestedZoom && (
        <div
          className="EnlargedImage__enlarged-container"
          aria-hidden={!zoomed}
          onClick={onRequestClose}
          style={{
            pointerEvents: zoomed ? 'auto' : 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 90,
            cursor: 'zoom-out',
          }}
        >
          <animated.div
            className="EnlargedImage__overlay"
            style={{
              opacity: overlay.opacity,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,

              backgroundColor: overlayColor,
            }}
          >
            <div
              style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                textAlign: 'center',
                backgroundColor: 'white',
                zIndex: 999,
              }}
            >
              titile: {title} <br />
              description: {description} <br />
              ups: {ups} <br />
              downs: {downs} <br />
              score: {score} <br />
            </div>
          </animated.div>

          <animated.img
            className="EnlargedImage__clone"
            onLoad={() => {
              setCloneLoaded(true);
            }}
            style={{
              pointerEvents: 'none',
              zIndex: 100,
              position: 'absolute',
              opacity: props.opacity,
              transform: props.transform,
              left: props.left,
              top: props.top,
              width: props.width,
              height: props.height,
            }}
            ref={cloneRef}
            src={enlargedSrc || src}
          />
        </div>
      )}
    </React.Fragment>
  );
};

function getInitialClonedDimensions(o: PositionType, t: PositionType) {
  const scale = o.w / t.w;
  const translateX = o.x + o.w / 2 - (t.x + t.w / 2);
  const translateY = o.y + o.h / 2 - (t.y + t.h / 2);
  
return {
    scale,
    translateX,
    translateY,
  };
}

/**
 * Get the target dimensions / position of the image when
 * it's zoomed in
 *
 * @param iw (image width)
 * @param ih (image height)
 * @param padding
 */

function getTargetDimensions(iw: number, ih: number, padding = 0) {
  const vp = getViewport();
  const target = scaleToBounds(iw, ih, vp.width - padding, vp.height - padding);
  const left = vp.width / 2 - target.width / 2;
  const top = vp.height / 2 - target.height / 2;
  
return {
    x: left,
    y: top,
    w: target.width,
    h: target.height,
  };
}

/**
 * Scale numbers to bounds given max dimensions while
 * maintaining the original aspect ratio
 *
 * @param ow
 * @param oh
 * @param mw
 * @param mh
 */

function scaleToBounds(ow: number, oh: number, mw: number, mh: number) {
  let scale = Math.min(mw / ow, mh / oh);
  if (scale > 1) scale = 1;
  
return {
    width: ow * scale,
    height: oh * scale,
  };
}

/**
 * Server-safe measurement of the viewport size
 */

function getViewport() {
  if (typeof window !== 'undefined') {
    return { width: window.innerWidth, height: window.innerHeight };
  }

  return { width: 0, height: 0 };
}

export default ImageEnlarger;
