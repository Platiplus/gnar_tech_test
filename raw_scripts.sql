\c gnar_tech_test

CREATE TABLE uploads (
	id uuid NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT uploads_pkey PRIMARY KEY (id)
);

CREATE TABLE upload_info (
	id uuid NOT NULL,
	id_upload uuid NOT NULL,
	yard_code varchar(255) NOT NULL,
	employee_code int4 NOT NULL,
	clock_in timestamptz NOT NULL,
	clock_out timestamptz NOT NULL,
	CONSTRAINT upload_info_pkey PRIMARY KEY (id)
);

ALTER TABLE upload_info ADD CONSTRAINT upload_info_id_upload_fkey FOREIGN KEY (id_upload) REFERENCES uploads(id);