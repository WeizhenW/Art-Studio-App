CREATE TABLE "painting" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

INSERT INTO "painting" ("name", "description", "price", "image_path") 
VALUES ('Wide Bird','Fine Art Print of original oil painting Wild bird animal 8X10"',25.00,'images/wide_bird.jpg'),
('Lion','Giclée Fine Art Print of Original gouache painting lion portrait, wildlife 8X10"',25.00,'images/lion.jpg'),
('Ocean Wave','Giclée fine art print of oil painting ocean wave on Somerset paper 8×10"',25.00,'images/waves.png'),
('Sunset','Giclée fine art print of oil painting sunset at sea on Somerset paper 8×10"',25.00,'images/sunset.jpg'),
('Leopard','Giclée Fine Art Print of oil painting leopard on Somerset paper, wildlife 8×10"',25.00,'images/leopard.jpg'),
('Highland Bull','Giclée Fine Art Print of oil painting Highland bull on Somerset paper, 8×10"',25.00,'images/highland_bull.jpg'),
('Cat', 'Fine Art Print of original oil painting Cat in the tree, animal 8X10"', 25.00,'images/cat.jpg'),
('Iceberg and Tug Boat', 'Fine Art Print of original oil painting Iceberg and tug boat 8X10"', 25.00,'images/boat.jpg'),
('Magolia Flower', 'Giclée fine art print of Oil painting original Magnolia flower plant 8X10"', 25.00,'images/magolia.jpg'),
('Three Boats', 'Giclée fine art print of oil painting 3 boats on Somerset velvet paper, nature 8X10"', 25.00,'images/three_boats.jpg');

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (1000) NOT NULL,
	"street" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"state" VARCHAR(20) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT NOT NULL
);
