import subprocess
import sys
from pathlib import Path

try:
    import yt_dlp
except ImportError:
    print("Installing yt-dlp...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "yt-dlp"])
    import yt_dlp


def download_audio(url: str, output_dir: Path) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)

    options = {
        "format": "bestaudio/best",
        "outtmpl": str(output_dir / "level4.%(ext)s"),
        "noplaylist": True,
        "quiet": False,
        "no_warnings": True,
        "restrictfilenames": False,
        "postprocessors": [],
    }

    with yt_dlp.YoutubeDL(options) as downloader:
        info = downloader.extract_info(url, download=True)
        title = info.get("title", "audio")
        print(f"Downloaded: {title}")


if __name__ == "__main__":
    url = input("Paste the YouTube URL: ").strip()
    if not url:
        print("No URL provided.")
        sys.exit(1)

    project_dir = Path(__file__).resolve().parent
    output_dir = project_dir / "audio"
    download_audio(url, output_dir)
    print(f"Saved in: {output_dir}")
