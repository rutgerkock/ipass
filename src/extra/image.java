package extra;

public class image {
    private String adres;
    private String locatie;
    private String datum;
    private String tijd;
    private String resolutie;
    private String formaat;
    private String dpi;
    private String bit;
    private String camera;
    private String lens;
    private String focalLengt;
    private String aperture;
    private String shutterSpeed;
    private String iso;

    public image(String ad, String lc, String dt, String t, String rs, String fm, String DPI, String BIT, String cm, String ls, String fl, String ap, String ss, String ISO) {
        adres = ad;
        locatie = lc;
        datum = dt;
        tijd = t;
        resolutie = rs;
        formaat = fm;
        dpi = DPI;
        bit = BIT;
        camera = cm;
        lens = ls;
        focalLengt = fl;
        aperture = ap;
        shutterSpeed = ss;
        iso = ISO;
    }
    public String getAdres() {
        return adres;
    }
    public String getLocatie() {
        return locatie;
    }

    public String getDatum() {
        return datum;
    }
    public String getTijd() {
        return tijd;
    }
    public String getResolutie() {
        return resolutie;
    }
    public String getFormaat() {
        return formaat;
    }
    public String getDpi() {
        return dpi;
    }
    public String getBit() {
        return bit;
    }
    public String getCamera() {
        return camera;
    }
    public String getLens() {
        return lens;
    }
    public String getFocalLengt() {
        return focalLengt;
    }
    public String getAperture() {
        return aperture;
    }
    public String getShutterSpeed() {
        return shutterSpeed;
    }
    public String getIso() {
        return iso;
    }
}
