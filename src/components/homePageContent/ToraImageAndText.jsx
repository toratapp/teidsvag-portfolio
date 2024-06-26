import tora from "../../assets/tora.jpg";

function ToraImageAndText() {
  return (
    <div className="tora-image-and-text m-6 flex flex-row gap-5 items-center lg:items-start lg:h">
      <figure className="max-w-36 flex-1">
        <img src={tora} className="rounded-br-3xl" alt="Tora headshot" />
      </figure>
      <div className="flex-1">
        <h3>Tora Oskal Eidsvåg</h3>
        <p className="font-light text-sm">B: 09.11.93</p>
        <p className="bio-p mt-3">Front-end developer and graphic designer.</p>
      </div>
    </div>
   );
}

export default ToraImageAndText;
