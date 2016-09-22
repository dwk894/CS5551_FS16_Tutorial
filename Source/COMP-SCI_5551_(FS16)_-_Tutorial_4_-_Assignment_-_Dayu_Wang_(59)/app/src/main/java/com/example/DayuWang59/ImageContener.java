package com.example.DayuWang59;

import android.graphics.Bitmap;

import com.example.DayuWang59.FlickrManager.GetThumbnailsThread;
import com.example.DayuWang59.MainActivity.UIHandler;

class ImageContener implements IThumb {
	String id;
	int position;
	String thumbURL;
	Bitmap thumb;
	Bitmap photo;
	String largeURL;
	private String owner;
	private String secret;
	private String server;
	private String farm;

	ImageContener(String id, String owner, String secret, String server, String farm) {
		super();
		this.id = id;
		this.owner = owner;
		this.secret = secret;
		this.server = server;
		this.farm = farm;
		setThumbURL(createPhotoURL(FlickrManager.PHOTO_THUMB, this));
		setLargeURL(createPhotoURL(FlickrManager.PHOTO_LARGE, this));
	}

	void setThumbURL(String thumbURL) {
		this.thumbURL = thumbURL;
		onSaveThumbURL(FlickrManager.uihandler, this);
	}

	void setLargeURL(String largeURL) {
		this.largeURL = largeURL;
	}

	@Override
	public String toString() {
		return "ImageContener [id=" + id + ", thumbURL=" + thumbURL + ", largeURL=" + largeURL + ", owner=" + owner + ", secret=" + secret + ", server=" + server + ", farm="
				+ farm + "]";
	}

	private String createPhotoURL(int photoType, ImageContener imgCon) {
		String tmp = null;
		tmp = "http://farm" + imgCon.farm + ".staticflickr.com/" + imgCon.server + "/" + imgCon.id + "_" + imgCon.secret;// +".jpg";
		switch (photoType) {
		case FlickrManager.PHOTO_THUMB:
			tmp += "_t";
			break;
		case FlickrManager.PHOTO_LARGE:
			tmp += "_z";
			break;

		}
		tmp += ".jpg";
		return tmp;
	}

	Bitmap getPhoto() {
		return photo;
	}

	void setPhoto(Bitmap photo) {
		this.photo = photo;
	}

	@Override
	public void onSaveThumbURL(UIHandler uih, ImageContener ic) {
		// TODO Auto-generated method stub
		new GetThumbnailsThread(uih, ic).start();
	}
}
