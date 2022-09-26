
import loaderSvg from '../../assets/svgs/loader.svg'

export default function Loading() {
  return (
    <div id="global-loader">
    <img src={loaderSvg} className="loader-img" alt="Loader"/>
</div>
  );
}
